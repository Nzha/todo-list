function addTask() {
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
    taskDescription.setAttribute('id', 'message');
    taskDescription.setAttribute('name', 'message');
    taskDescription.setAttribute('placeholder', 'Description');
    newTaskEditor.appendChild(taskDescription);

    const button = document.createElement('button');
    button.textContent = 'Add task';
    newTaskForm.appendChild(button);

}



export default addTask;