import createEl, { increment } from './functions';
import createAddTaskBtn from './addTask';

function loadContent(title) {
    const content = document.querySelector('.content');

    const contentContainer = createEl('div', 'content-inner-container', content);
    const contentHeader = createEl('div', 'content-header', contentContainer);

    const headerTitle = createEl('h2', 'content-header-title', contentHeader);
    headerTitle.textContent = title;

    const taskContainer = createEl('div', 'task-container', contentContainer);
    const taskList = createEl('ul', 'task-list', taskContainer);
    
    createAddTaskBtn();
}

export default loadContent;