function loadContent(title) {
    const contentDiv = document.querySelector('.content');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-inner-container');
    contentDiv.appendChild(contentContainer);

    // Header
    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    contentContainer.appendChild(contentHeader);

    const headerTitle = document.createElement('h2');
    headerTitle.classList.add('content-header-title');
    headerTitle.textContent = title;
    contentHeader.appendChild(headerTitle);

    // Tasks
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    contentContainer.appendChild(taskContainer);

    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');
    taskContainer.appendChild(taskList);

    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task-list-item');
    taskListItem.textContent = 'Test';
    taskList.appendChild(taskListItem);

    // Tasks - Add task
    const addTaskContainer = document.createElement('li');
    addTaskContainer.classList.add('add-task-container');
    taskList.appendChild(addTaskContainer);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.textContent = 'Add task';
    addTaskContainer.appendChild(addTaskBtn);


}

export default loadContent;