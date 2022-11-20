import loadNewTaskForm from './addTask';
import createEl from './createElement';

function loadContent(title) {
    const contentContainer = createEl('div', 'content-inner-container', '.content');
    const contentHeader = createEl('div', 'content-header', '.content-inner-container');
    
    const headerTitle = createEl('h2', 'content-header-title', '.content-header');
    headerTitle.updateContent(title);

    const taskContainer = createEl('div', 'task-container', '.content-inner-container');
    const taskList = createEl('ul', 'task-list', '.task-container')
    const addTaskContainer = createEl('li', 'add-task-container', '.task-list');
    
    const addTaskBtn = createEl('button', 'add-task-btn', '.add-task-container');
    addTaskBtn.updateContent('Add task');

    const addTaskBtnDiv = document.querySelector('.add-task-btn');
    addTaskBtnDiv.addEventListener('click', loadNewTaskForm);
}

export default loadContent;