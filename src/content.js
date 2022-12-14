import { parseISO, isToday, isThisWeek, isPast } from 'date-fns';
import createEl from './functions';
import createAddTaskBtn, { createTaskEl } from './tasks';

function loadContent(e, title) {
    if (e) e.preventDefault();

    const content = document.querySelector('.content');

    // Remove any previous content if any
    if (content) content.innerHTML = '';

    const contentContainer = createEl('div', 'content-inner-container', content);
    const contentHeader = createEl('div', 'content-header', contentContainer);
    const headerTitle = createEl('h2', 'content-header-title', contentHeader);
    const taskContainer = createEl('div', 'task-container', contentContainer);
    const taskList = createEl('ul', 'task-list', taskContainer);

    headerTitle.textContent = title;

    /**
    * Check for locally stored tasks and projects
    * NB: There are always stored projects since there are some by default that are stored on loading
    */
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const storedProjects = JSON.parse(localStorage.getItem('projects'));

    if (storedTasks) {
        const todaysTasks = storedTasks.filter(task => isToday(parseISO(task.dueDate)));
        const thisWeekTasks = storedTasks.filter(task => isThisWeek(parseISO(task.dueDate)));

        if (title == 'All' && storedTasks.length > 0) {
            loadTasks(storedTasks);
        } else if (title == 'Today' && todaysTasks.length > 0) {
            loadTasks(todaysTasks);
        } else if (title == 'Week' && thisWeekTasks.length > 0) {
            loadTasks(thisWeekTasks);
        } else {
            loadEmptyState();
        }
    } else {
        loadEmptyState();
    }

    // If there is no title, display project name as page title and load project tasks if any
    if (!title) {
        const projectContainer = e.target.closest('.sidebar-projects-container');

        if (projectContainer) {
            const myProject = storedProjects.find(el => el.id == projectContainer.id.replace(/\D/g,''));
            headerTitle.textContent = myProject.name;

            if (storedTasks) {
                const projectTasks = storedTasks.filter(task => task.project == myProject.name);

                if (projectTasks.length > 0) {
                    loadTasks(projectTasks);
                }
            }
        }
    }

    createAddTaskBtn();
}

function loadTasks(tasks) {
    tasks.forEach(task => {
        createTaskEl(task, true)

        // Display checked checkboxes as checked
        if (task.status == 'checked') {
            const checkbox = document.querySelector(`#task${task.id} .task-checkbox`);
            checkbox.checked = true;
        }

        loadTaskDateColor(task);
    });
}

function loadTaskDateColor(task) {
    if (task.dueDate) {
        const dueDateContainer = document.querySelector(`#task-due-date-${task.id}`);
        if (isToday(parseISO(task.dueDate))) {
            dueDateContainer.style.color = '#058527';
        } else if (isPast(parseISO(task.dueDate))) {
            dueDateContainer.style.color = '#d34f46';
        }
    }
}

function loadEmptyState() {
    const contentContainer = document.querySelector('.content-inner-container');
    const emptyStateContainer = createEl('div', 'empty-state-container', contentContainer);
    const emptyStateImg = createEl('div', 'empty-state-img', emptyStateContainer);
    const emptyStateHeader = createEl('h3', 'empty-state-header', emptyStateContainer);
    const emptyStateTxt = createEl('div', 'empty-state-txt', emptyStateContainer);

    emptyStateHeader.textContent = 'Your peace of mind is priceless';
    emptyStateTxt.textContent = 'Well done! All your tasks are organized in the right place.';
}

export { loadContent as default, loadEmptyState, loadTaskDateColor };