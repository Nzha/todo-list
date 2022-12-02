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

    // Check for locally stored tasks
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks) {
        storedTasks.forEach(storedTask => {
            // Create corresponding elements
            createTaskEl(storedTask, true)

            // Display checked checkboxes as checked
            if (storedTask.status == 'checked') {
                const checkbox = document.querySelector(`#task${storedTask.id} .task-checkbox`);
                checkbox.checked = true;
            }
        })
    }

    createAddTaskBtn();
}

export default loadContent;