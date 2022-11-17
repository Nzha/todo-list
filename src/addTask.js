function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // FORM
    const taskListDiv = document.querySelector('.task-list');

    const newTaskContainer = document.createElement('li');
    newTaskContainer.classList.add('new-task-container');
    taskListDiv.appendChild(newTaskContainer);

    const newTaskForm = document.createElement('form');
    newTaskForm.classList.add('new-task-form');
    newTaskContainer.appendChild(newTaskForm);

    const newTaskEditor = document.createElement('div');
    newTaskEditor.classList.add('new-task-form-editor');
    newTaskForm.appendChild(newTaskEditor);

    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('name', 'taskName');
    taskName.setAttribute('placeholder', 'Task name');
    taskName.setAttribute('autocomplete', 'off');
    newTaskEditor.appendChild(taskName);

    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.setAttribute('name', 'taskDescription');
    taskDescription.setAttribute('placeholder', 'Description');
    newTaskEditor.appendChild(taskDescription);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    newTaskForm.appendChild(btnContainer);

    const resetTaskBtn = document.createElement('button');
    resetTaskBtn.classList.add('cancel-task-form-btn');
    resetTaskBtn.textContent = 'Cancel';
    btnContainer.appendChild(resetTaskBtn);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-form-btn');
    addTaskBtn.textContent = 'Add task';
    btnContainer.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', addTask)
}

function addTask(e) {
    e.preventDefault();
    
    const newTaskForm = document.querySelector('.new-task-form');
    const taskNameInput = document.querySelector('#taskName');
    const taskDescriptionInput = document.querySelector('#taskDescription');

    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;

    if (!taskName) return;

    createTaskEl(taskName, taskDescription)

    newTaskForm.reset();
}

function createTaskEl(taskName, taskDescription) {

    const taskList = document.querySelector('.task-list');
    const newTaskContainer = document.querySelector('.new-task-container');

    // CONTAINER
    const li = document.createElement('li');
    li.classList.add('task-list-item-container');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    li.appendChild(taskDiv);

    // CUSTOM CHECKBOX AND LABEL/TASK NAME
    const checkboxId = `cbx${increment()}`;

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', checkboxId);
    checkbox.classList.add('inp-cbx');
    checkbox.style.display = 'none';
    taskDiv.appendChild(checkbox);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxId);
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

    // const checkboxLabel2 = document.createElement('label');
    // checkboxLabel2.setAttribute('for', checkboxId);
    // checkboxLabel2.classList.add('cbx');
    // checkboxLabel2.textContent = taskDescription;
    // li.appendChild(checkboxLabel2);

    // const span3 = document.createElement('span');
    // span3.textContent = taskDescription;
    // checkboxLabel.appendChild(span3);



    taskList.insertBefore(li, newTaskContainer);
}

let increment = (function(n) {
    return function() {
      n += 1;
      return n;
    }
}(0)); 

export default loadNewTaskForm;