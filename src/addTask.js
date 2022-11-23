import createEl, { createEl2, increment } from './functions';

let myTasks = [];

const task = (id, name, description, status) => {
    return {id, name, description, status};
}

function createAddTaskBtn() {
    const taskListDiv = document.querySelector('.task-list');

    const addTaskContainer = createEl2('li', 'add-task-container', taskListDiv);

    const addTaskBtn = createEl2('button', 'add-task-btn', addTaskContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', loadNewTaskForm);
}

function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // FORM
    const taskListDiv = document.querySelector('.task-list');
    const newTaskContainer = createEl2('li', 'new-task-container', taskListDiv);
    const newTaskForm = createEl2('form', 'new-task-form', newTaskContainer);
    const newTaskEditor = createEl2('div', 'new-task-form-editor', newTaskForm);

    const taskName = createEl2('input', 'taskName', newTaskEditor);
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('autocomplete', 'off');

    const taskDescription = createEl2('textarea', 'taskDescription', newTaskEditor);
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');

    const btnContainer = createEl2('div', 'form-btn-container', newTaskForm);

    const cancelTaskBtn = createEl2('button', 'cancel-task-form-btn', btnContainer);
    cancelTaskBtn.textContent = 'Cancel';
    cancelTaskBtn.addEventListener('click', cancelTask)

    const addTaskBtn = createEl2('button', 'add-task-form-btn', btnContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', addTask)
}

function addTask(e) {   
    e.preventDefault();

    const newTaskForm = document.querySelector('.new-task-form');
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');

    let taskId = increment();
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;

    if (!taskName) return;

    const newTask = task(taskId, taskName, taskDescription, 'unchecked');
    myTasks.push(newTask);
    console.table(myTasks);

    createTaskEl(newTask);

    newTaskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(newTask) { 

    const taskList = document.querySelector('.task-list');
    const newTaskContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const li = createEl2('li', 'task-list-item-container', newTaskContainer);
    const taskDiv = createEl2('div', 'task', li);

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = createEl2('input', 'task-checkbox', taskDiv)
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', newTask.id);
    checkbox.style.display = 'none';

    const checkboxLabel = createEl2('label', 'task-label', taskDiv)
    checkboxLabel.setAttribute('for', newTask.id);

    const span = createEl2('span', 'span', checkboxLabel)

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "12px");
    svg.setAttributeNS(null, "height", "9px");
    svg.setAttributeNS(null, "viewBox", "0 0 12 9");
    span.appendChild(svg);

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttributeNS(null, "points", "1 5 4 8 11 1");
    svg.appendChild(polyline);

    const span2 = createEl2('span', 'span2', checkboxLabel)
    span2.textContent = newTask.name;

    // TASK DESCRIPTION
    const taskDescriptionDiv = createEl2('div', 'task-description', taskDiv)

    const span3 = createEl2('span', 'span3', taskDescriptionDiv)
    span3.textContent = newTask.description;

    taskList.insertBefore(li, newTaskContainer);

    // TRASHCAN
    const taskOptionContainer = createEl2('div', 'task-option-container', li)
    taskOptionContainer.classList.add('fa-regular', 'fa-trash-can');

    // EVENT LISTENERS
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateTaskStatus))
}

function cancelTask(e) {
    e.preventDefault();

    const NewTaskContainer = document.querySelector('.new-task-container');

    NewTaskContainer.remove();
    createAddTaskBtn();
}

function updateTaskStatus(e) {
    // Find index in array matching div's index
    const indexArrayMatching = myTasks.findIndex(array => {
        return array.id == e.target.id;
    });

    if (e.target.checked) {
        myTasks[indexArrayMatching].status = 'checked';
    } else {
        myTasks[indexArrayMatching].status = 'unchecked';
    }

    console.table(myTasks);
}

export default createAddTaskBtn;