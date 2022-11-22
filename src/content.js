import createEl from './functions';
import createAddTaskBtn from './addTask';

function loadContent(title) {
    const contentContainer = createEl('div', 'content-inner-container', '.content');
    const contentHeader = createEl('div', 'content-header', '.content-inner-container');

    const headerTitle = createEl('h2', 'content-header-title', '.content-header');
    headerTitle.updateContent(title);

    const taskContainer = createEl('div', 'task-container', '.content-inner-container');
    const taskList = createEl('ul', 'task-list', '.task-container')
    
    createAddTaskBtn();
}

export default loadContent;