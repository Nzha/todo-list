import createEl from './createElement';

let myTasks = [];

const task = (id, name, description) => {
    return {id, name, description};
}

function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // FORM
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
    const li = createEl('li', 'task-list-item-container', '.new-task-container');
    const taskDiv = createEl('div', 'task', '.task-list-item-container:last-of-type');

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = createEl('input', 'tasks', '.task:last-of-type');
    checkbox.element.setAttribute('type', 'checkbox');
    checkbox.element.setAttribute('id', taskId);
    checkbox.element.classList.add('inp-cbx');
    checkbox.element.style.display = 'none';

    const checkboxLabel = createEl('label', 'cbx', '.task:last-of-type');
    checkboxLabel.element.setAttribute('for', taskId);

    const span = document.createElement('span');
    checkboxLabel.element.appendChild(span);

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
    checkboxLabel.element.appendChild(span2);

    // TASK DESCRIPTION
    const taskDescriptionDiv = createEl('div', 'task-description', '.task-list-item-container:last-of-type');
    taskDescriptionDiv.updateContent(taskDescription);

    taskList.insertBefore(li.element, newTaskContainer);
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 

export default loadNewTaskForm;