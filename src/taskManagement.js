import createEl, { increment, dateFormat } from './functions';
import { loadEmptyState } from './content';

let myTasks = [];

// Update myTasks with locally stored tasks
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
if (storedTasks) myTasks = JSON.parse(localStorage.getItem('tasks'));

const task = (id, name, description, dueDate, status) => {
    return {id, name, description, dueDate, status};
}

function createAddTaskBtn() {
    // Return if add task button already exists
    if (document.querySelector('.add-task-btn')) return;

    const taskListDiv = document.querySelector('.task-list');

    const addTaskContainer = createEl('li', 'add-task-container', taskListDiv);

    const addTaskBtn = createEl('button', 'add-task-btn', addTaskContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', function() {
        loadTaskForm(true)
    });
}

function loadTaskForm(container, parentEl) {
    // Container required for new task form, not for editing task form.
    if (container) {
        // Remove 'Add task' button    
        const addTaskContainer = document.querySelector('.add-task-container');
        addTaskContainer.parentNode.removeChild(addTaskContainer);

        // Create container
        const taskListDiv = document.querySelector('.task-list');
        const newTaskFormContainer = createEl('li', 'new-task-form-container', taskListDiv);

        const taskForm = document.querySelector('.task-form');

        // Remove existing task form if any
        if (taskForm) {
            const taskContainer = taskForm.closest('.task-list-item-container');
            const myTask = myTasks.find(el => el.id == taskContainer.id);

            taskForm.remove();
            createTaskEl(myTask, taskContainer);
        }

        parentEl = newTaskFormContainer;
    }

    const taskForm = createEl('form', 'task-form', parentEl);
    const taskEditor = createEl('div', 'task-form-editor', taskForm);
    const newTaskFormContainer = taskForm.closest('.new-task-form-container');

    const taskName = createEl('input', 'taskName', taskEditor);
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('autocomplete', 'off');
    taskName.setAttribute('maxlength', '50');
    taskName.focus();

    const taskDescription = createEl('textarea', 'taskDescription', taskEditor);
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');
    taskDescription.setAttribute('maxlength', '300');

    const taskDueDate = createEl('input', 'taskDueDate', taskEditor);
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'taskDueDate');
    taskDueDate.setAttribute('name', 'taskDueDate');
    taskDueDate.setAttribute('placeholder', 'Description');

    const btnContainer = createEl('div', 'form-btn-container', taskForm);

    const cancelTaskBtn = createEl('button', 'cancel-task-form-btn', btnContainer);
    cancelTaskBtn.textContent = 'Cancel';
    cancelTaskBtn.addEventListener('click', cancelTaskForm)

    const addTaskBtn = createEl('button', 'add-task-form-btn', btnContainer);

    if (newTaskFormContainer) {
        addTaskBtn.textContent = 'Add task';
        addTaskBtn.addEventListener('click', addTask);
    } else {
        addTaskBtn.textContent = 'Save';
        addTaskBtn.addEventListener('click', saveTaskEdits);
    }
}

function addTask(e) {   
    e.preventDefault();

    const taskForm = document.querySelector('.task-form');
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');
    const taskDueDateInput = document.querySelector('#taskDueDate');

    let taskId = increment();

    // Prevent identical IDs
    myTasks.forEach(myTask => {if (myTask.id == taskId) taskId = increment()});

    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    let taskDueDate = taskDueDateInput.value;

    if (!taskName) return;

    const newTask = task(taskId, taskName, taskDescription, taskDueDate, 'unchecked');
    myTasks.push(newTask);
    console.table(myTasks);

    // Store tasks on user's computer
    localStorage.setItem('tasks', JSON.stringify(myTasks));

    createTaskEl(newTask, true);
    taskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(task, container, parentEl) { 
    const taskList = document.querySelector('.task-list');
    const newTaskFormContainer = document.querySelector('.new-task-form-container');
    const taskForm = document.querySelector('.task-form');

    const emptyStateContainer = document.querySelector('.empty-state-container');
    if (emptyStateContainer) emptyStateContainer.innerHTML = '';

    // Container required if a new task or a locally stored one is added, not when editing one.
    if (container) {
        // CONTAINER
        const taskContainer = createEl('li', 'task-list-item-container', taskList);
        taskContainer.setAttribute('id', `task${task.id}`);
        parentEl = taskContainer;
    }

    // TASK
    const taskDiv = createEl('div', 'task', parentEl);

    // TASK - Custom checkbox and label/task name
    const checkbox = createEl('input', 'task-checkbox', taskDiv);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `input-${task.id}`);
    checkbox.style.display = 'none';

    const checkboxLabel = createEl('label', 'task-label', taskDiv);
    checkboxLabel.setAttribute('for', `input-${task.id}`);

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
    span2.textContent = task.name;

    // TASK - description
    if (task.description) {
        const taskDescription = createEl('div', 'task-description', taskDiv);

        const span3 = createEl('span', 'span3', taskDescription);
        span3.textContent = task.description;
    }

    // TASK DUE DATE
    if (task.dueDate) {
        const dueDateContainer = createEl('div', 'task-due-date-container', parentEl);

        const calendar = createEl('div', 'task-option-calendar', dueDateContainer);
        calendar.classList.add('fa-regular', 'fa-calendar');

        const dueDate = createEl('div', 'task-due-date', dueDateContainer);
        dueDate.textContent = dateFormat(task.dueDate);
    }

    // TASK OPTIONS
    const taskOptionContainer = createEl('div', 'task-option-container', parentEl);

    const edit = createEl('div', 'task-option-edit', taskOptionContainer);
    edit.classList.add('fa-regular', 'fa-pen-to-square');

    const trashcan = createEl('div', 'task-option-trashcan', taskOptionContainer);
    trashcan.classList.add('fa-regular', 'fa-trash-can');

    // Insert task into list before new task form if we are not editing a task
    if (taskForm) taskList.insertBefore(parentEl, newTaskFormContainer);

    // EVENT LISTENERS
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateTaskStatus))

    const edits = document.querySelectorAll('.task-option-edit');
    edits.forEach(edit => edit.addEventListener('click', editTask))

    const trashcans = document.querySelectorAll('.task-option-trashcan');
    trashcans.forEach(trashcan => trashcan.addEventListener('click', deleteTask))
}

function cancelTaskForm(e) {
    e.preventDefault();

    const newTaskFormContainer = document.querySelector('.new-task-form-container');

    // newTaskFormContainer only exists when adding a task, not when editing one
    if (newTaskFormContainer) {
        newTaskFormContainer.remove()
    } else {
        const taskContainer = e.target.closest('.task-list-item-container');
        const taskForm = document.querySelector('.task-form');

        // Find task in myTasks for which id matches div id (without non-digits characters)
        const myTask = myTasks.find(el => el.id == taskContainer.id.replace(/\D/g,''));

        taskForm.remove();
        createTaskEl(myTask, false, taskContainer);
    }

    createAddTaskBtn();
}

function updateTaskStatus(e) {
    const taskContainer = e.target.closest('.task-list-item-container');
    const myTask = myTasks.find(el => el.id == taskContainer.id.replace(/\D/g,''));

    if (e.target.checked) {
        myTask.status = 'checked';
    } else {
        myTask.status = 'unchecked';
    }

    localStorage.setItem('tasks', JSON.stringify(myTasks))
    console.table(myTasks);
}

function editTask(e) {
    const taskContainer = e.target.closest('.task-list-item-container');
    const myTask = myTasks.find(el => el.id == taskContainer.id.replace(/\D/g,''));

    // Remove task form if one is already displayed
    const newTaskFormContainer = document.querySelector('.new-task-form-container');
    if (newTaskFormContainer) newTaskFormContainer.remove();
    createAddTaskBtn();

    taskContainer.textContent = '';

    loadTaskForm(false, taskContainer);
    document.querySelector('.taskName').value = myTask.name;
    document.querySelector('.taskName').focus();
    document.querySelector('.taskDescription').value = myTask.description;
    document.querySelector('.taskDueDate').value = myTask.dueDate;
}

function saveTaskEdits(e) {
    e.preventDefault();

    const taskContainer = e.target.closest('.task-list-item-container');
    const taskForm = document.querySelector('.task-form')
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');
    const taskDueDateInput = document.querySelector('#taskDueDate');
    const myTask = myTasks.find(el => el.id == taskContainer.id.replace(/\D/g,''));

    myTask.name = taskNameInput.value;
    myTask.description = taskDescriptionInput.value;
    myTask.dueDate = taskDueDateInput.value;

    if (!taskName) return;

    localStorage.setItem('tasks', JSON.stringify(myTasks));

    taskForm.remove();
    createTaskEl(myTask, false, taskContainer);
    console.table(myTasks);
}

function deleteTask(e) {
    const taskContainer = e.target.closest('.task-list-item-container');
    const myTaskIndex = myTasks.findIndex(el => el.id == taskContainer.id.replace(/\D/g,''));

    myTasks.splice(myTaskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(myTasks))

    if (myTasks.length === 0) loadEmptyState();

    taskContainer.remove();
    console.table(myTasks);
}

export { createAddTaskBtn as default, createTaskEl };