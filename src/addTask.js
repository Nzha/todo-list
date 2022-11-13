function loadNewTaskForm() {
    // Remove 'Add task' button    
    const addTaskContainer = document.querySelector('.add-task-container');
    addTaskContainer.parentNode.removeChild(addTaskContainer);

    // Create form
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

    const li = document.createElement('li');
    li.classList.add('task-list-item-container');

    const taskNameDiv = document.createElement('div');
    taskNameDiv.classList.add('task-name');
    taskNameDiv.textContent = taskName;
    li.appendChild(taskNameDiv);

    const taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add('task-description');
    taskDescriptionDiv.textContent = taskDescription;
    li.appendChild(taskDescriptionDiv);

    taskList.insertBefore(li, newTaskContainer);
}

export default loadNewTaskForm;