import createEl from './createElement';

let myTasks = [];

const task = (id, name, description) => {
    return {id, name, description};
}

function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // Create form
    const taskListDiv = document.querySelector('.task-list');
    const newTaskContainer = createEl('li', 'new-task-container', '.task-list');
    const newTaskForm = createEl('form', 'new-task-form', '.new-task-container');
    const newTaskEditor = createEl('div', 'new-task-form-editor', '.new-task-form');

    const taskName = createEl('input', 'taskName', '.new-task-form-editor');
    taskName.element.setAttribute('type', 'text');
    taskName.element.setAttribute('id', 'taskName');
    taskName.element.setAttribute('name', 'taskName');
    taskName.element.setAttribute('placeholder', 'Task name');
    taskName.element.setAttribute('autocomplete', 'off');

    const taskDescription = createEl('textarea', 'taskDescription', '.new-task-form-editor');
    taskDescription.element.setAttribute('type', 'text');
    taskDescription.element.setAttribute('id', 'taskDescription');
    taskDescription.element.setAttribute('name', 'taskDescription');
    taskDescription.element.setAttribute('placeholder', 'Description');

    const btnContainer = createEl('div', 'form-btn-container', '.new-task-form');

    const resetTaskBtn = createEl('button', 'cancel-task-form-btn', '.form-btn-container');
    resetTaskBtn.updateContent('Cancel');

    const addTaskBtn = createEl('button', 'add-task-form-btn', '.form-btn-container');
    addTaskBtn.updateContent('Add task');
    addTaskBtn.element.addEventListener('click', addTask)
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

    const newTask = task(taskId, taskName, taskDescription);
    myTasks.push(newTask);

    createTaskEl(taskId, taskName, taskDescription);

    console.log(myTasks);

    newTaskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(taskId, taskName, taskDescription) {
    const taskList = document.querySelector('.task-list');
    const newTaskContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const li = document.createElement('li');
    li.classList.add('task-list-item-container');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    li.appendChild(taskDiv);

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', taskId);
    checkbox.classList.add('inp-cbx');
    checkbox.style.display = 'none';
    taskDiv.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', taskId);
    checkboxLabel.classList.add('cbx');
    taskDiv.appendChild(checkboxLabel);

    const span = document.createElement('span');
    checkboxLabel.appendChild(span);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "12px");
    svg.setAttributeNS(null, "height", "9px");
    svg.setAttributeNS(null, "viewBox", "0 0 12 9");
    span.appendChild(svg);

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttributeNS(null, "points", "1 5 4 8 11 1");
    svg.appendChild(polyline);

    const span2 = document.createElement('span');
    span2.textContent = taskName;
    checkboxLabel.appendChild(span2);

    // TASK DESCRIPTION
    const taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add('task-description');
    taskDescriptionDiv.textContent = taskDescription;
    li.appendChild(taskDescriptionDiv);

    taskList.insertBefore(li, newTaskContainer);
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 

export default loadNewTaskForm;