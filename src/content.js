import createEl from './functions';
import createAddTaskBtn, { createTaskEl } from './taskManagement';

function loadContent(title) {
    const content = document.querySelector('.content');

    const contentContainer = createEl('div', 'content-inner-container', content);
    const contentHeader = createEl('div', 'content-header', contentContainer);

    const headerTitle = createEl('h2', 'content-header-title', contentHeader);
    headerTitle.textContent = title;

    const taskContainer = createEl('div', 'task-container', contentContainer);
    const taskList = createEl('ul', 'task-list', taskContainer);
    





    // myTasks;

    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    // console.log(storedTasks);

    if (storedTasks) {
        // storedTasks.forEach(storedTask => console.log(storedTask));
        // storedTasks.forEach(storedTask => createTaskEl(storedTask, taskContainer, true));
        storedTasks.forEach(storedTask => createTaskEl(storedTask, true));

        // for (const storedTask of storedTasks) {
        //     const taskContainer = createEl('li', 'task-list-item-container', taskList);
        //     taskContainer.setAttribute('id', storedTask.id);
        //     createTaskEl(storedTask, taskContainer);
        // }
    }




    


    createAddTaskBtn();
}

export default loadContent;