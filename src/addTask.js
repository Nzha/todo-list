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
    console.log(myTasks);

    createTaskEl(newTask);

    newTaskForm.reset();
    taskNameInput.focus();
}

function createTaskEl(newTask) { 

    const taskList = document.querySelector('.task-list');
    const newTaskContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const li = createEl('li', 'task-list-item-container', '.new-task-container');
    const taskDiv = createEl('div', 'task', '.task-list-item-container:last-of-type');

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', newTask.id);
    checkbox.classList.add('inp-cbx');
    checkbox.style.display = 'none';
    taskDiv.element.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', newTask.id);
    checkboxLabel.classList.add('cbx');
    taskDiv.element.appendChild(checkboxLabel);

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
    span2.textContent = newTask.name;
    checkboxLabel.appendChild(span2);

    // TASK DESCRIPTION
    const taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add('task-description');
    taskDiv.element.appendChild(taskDescriptionDiv);

    const span3 = document.createElement('span');
    span3.textContent = newTask.description;
    taskDescriptionDiv.appendChild(span3);

    taskList.insertBefore(li.element, newTaskContainer);
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(-1)); 

export default loadNewTaskForm;