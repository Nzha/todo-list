import createEl, { increment } from './functions';

let myTasks = [];

const task = (id, name, description, dueDate, status) => {
    return {id, name, description, dueDate, status};
}

function createAddTaskBtn() {
    const taskListDiv = document.querySelector('.task-list');

    const addTaskContainer = createEl('li', 'add-task-container', taskListDiv);

    const addTaskBtn = createEl('button', 'add-task-btn', addTaskContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', loadNewTaskForm);
}

function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // FORM
    const taskListDiv = document.querySelector('.task-list');
    const newTaskFormContainer = createEl('li', 'new-task-container', taskListDiv);
    const newTaskForm = createEl('form', 'new-task-form', newTaskFormContainer);
    const newTaskEditor = createEl('div', 'new-task-form-editor', newTaskForm);

    const taskName = createEl('input', 'taskName', newTaskEditor);
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('autocomplete', 'off');

    const taskDescription = createEl('textarea', 'taskDescription', newTaskEditor);
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');

    const taskDueDate = createEl('input', 'taskDueDate', newTaskEditor);
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'taskDueDate');
    taskDueDate.setAttribute('name', 'taskDueDate');
    taskDueDate.setAttribute('placeholder', 'Description');

    const btnContainer = createEl('div', 'form-btn-container', newTaskForm);

    const cancelTaskBtn = createEl('button', 'cancel-task-form-btn', btnContainer);
    cancelTaskBtn.textContent = 'Cancel';
    cancelTaskBtn.addEventListener('click', cancelNewTaskEl)

    const addTaskBtn = createEl('button', 'add-task-form-btn', btnContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', addTask)
}

function addTask(e) {   
    e.preventDefault();

    const newTaskForm = document.querySelector('.new-task-form');
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');
    const taskDueDateInput = document.querySelector('#taskDueDate');

    let taskId = increment();
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let taskDueDate = taskDueDateInput.value;

    if (!taskName) return;

    const newTask = task(taskId, taskName, taskDescription, taskDueDate, 'unchecked');
    myTasks.push(newTask);
    console.table(myTasks);

    createTaskEl(newTask);

    newTaskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(newTask) { 
    const taskList = document.querySelector('.task-list');
    const newTaskFormContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const taskContainer = createEl('li', 'task-list-item-container', newTaskFormContainer);
    const task = createEl('div', 'task', taskContainer);

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = createEl('input', 'task-checkbox', task);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', newTask.id);
    checkbox.style.display = 'none';

    const checkboxLabel = createEl('label', 'task-label', task);
    checkboxLabel.setAttribute('for', newTask.id);

    const span = createEl('span', 'span', checkboxLabel);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "12px");
    svg.setAttributeNS(null, "height", "9px");
    svg.setAttributeNS(null, "viewBox", "0 0 12 9");
    span.appendChild(svg);

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttributeNS(null, "points", "1 5 4 8 11 1");
    svg.appendChild(polyline);

    const span2 = createEl('span', 'span2', checkboxLabel);
    span2.textContent = newTask.name;

    // TASK DESCRIPTION
    const taskDescription = createEl('div', 'task-description', task);

    const span3 = createEl('span', 'span3', taskDescription);
    span3.textContent = newTask.description;

    // TASK DUE DATE & OPTIONS
    const taskOptionContainer = createEl('div', 'task-option-container', taskContainer);

    if (newTask.dueDate) {
        const dueDateContainer = createEl('div', 'due-date-container', taskOptionContainer);

        const calendar = createEl('div', 'task-option-calendar', dueDateContainer);
        calendar.classList.add('fa-regular', 'fa-calendar');

        const dueDate = createEl('div', 'task-due-date', dueDateContainer);
        dueDate.textContent = newTask.dueDate;
    }

    const edit = createEl('div', 'task-option-edit', taskOptionContainer);
    edit.classList.add('fa-regular', 'fa-pen-to-square');

    const trashcan = createEl('div', 'task-option-trashcan', taskOptionContainer);
    trashcan.classList.add('fa-regular', 'fa-trash-can');

    // INSERT TASK INTO LIST BEFORE NEW TASK FORM
    taskList.insertBefore(taskContainer, newTaskFormContainer);

    // EVENT LISTENERS
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateTaskStatus))

    const trashcans = document.querySelectorAll('.task-option-trashcan');
    trashcans.forEach(trashcan => trashcan.addEventListener('click', deleteTask))
}

function cancelNewTaskEl(e) {
    e.preventDefault();

    const newTaskFormContainer = document.querySelector('.new-task-container');

    newTaskFormContainer.remove();
    createAddTaskBtn();
}

function updateTaskStatus(e) {
    // Find index in array where array ID and div ID match
    const indexArrayMatching = myTasks.findIndex(el => el.id == e.target.id);

    if (e.target.checked) {
        myTasks[indexArrayMatching].status = 'checked';
    } else {
        myTasks[indexArrayMatching].status = 'unchecked';
    }

    console.table(myTasks);
}

function deleteTask(e) {
    const eventTaskId = e.target.parentElement.parentElement.querySelector('.task-checkbox').id;

    // Find index in array where array ID and div ID match
    const indexArrayMatching = myTasks.findIndex(el => el.id == eventTaskId);

    myTasks.splice(indexArrayMatching, 1);
    e.target.parentElement.parentElement.remove();
    console.table(myTasks);
}

export default createAddTaskBtn;