import createEl from './functions';
import createAddTaskBtn, { createTaskEl } from './taskManagement';
import { parseISO, isToday, isThisWeek } from 'date-fns';

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
    const todaysTasks = storedTasks.filter(task => isToday(parseISO(task.dueDate)));
    const thisWeekTasks = storedTasks.filter(task => isThisWeek(parseISO(task.dueDate)));

    if (storedTasks) {
        if (title == 'All' && storedTasks) {
            loadTasks(storedTasks);
        } else if (title == 'Today' && todaysTasks) {
            loadTasks(todaysTasks);
        } else if (title == 'Week' && thisWeekTasks) {
            loadTasks(thisWeekTasks);
        } else {
            console.log('Empty');
        }
    }

    createAddTaskBtn();
}

function loadTasks(tasks) {
    tasks.forEach(task => {
        // Create corresponding elements
        createTaskEl(task, true)

        // Display checked checkboxes as checked
        if (task.status == 'checked') {
            const checkbox = document.querySelector(`#task${task.id} .task-checkbox`);
            checkbox.checked = true;
        }
    });
}

export default loadContent;