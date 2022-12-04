import { parseISO, isToday, isThisWeek } from 'date-fns';
import createEl from './functions';
import loadContent from './content';

const allTasksLink = document.querySelector('#all-tasks-link');
const todayTasksLink = document.querySelector('#today-tasks-link');
const weekTasksLink = document.querySelector('#week-tasks-link');

function setSideBar() {
    sidebarToggle();
    updateTaskCount();
    getPage();
    updateProjects();
}

function sidebarToggle() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const sideBarDiv = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const overlay = document.querySelector('.overlay');

    hideMenuBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sideBarDiv.classList.toggle('hidden');
        content.classList.toggle('full-width');
        overlay.classList.toggle('off');
    }
}

function updateTaskCount() {
    const allTasksCount = document.querySelector('.sidebar-tasks-item-count');
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const todaysTasks = storedTasks.filter(task => isToday(parseISO(task.dueDate)));
    const thisWeekTasks = storedTasks.filter(task => isThisWeek(parseISO(task.dueDate)));

    if (!allTasksCount) {
        const allTasksCount = createEl('div', 'sidebar-tasks-item-count', allTasksLink);
        const todaysTasksCount = createEl('div', 'sidebar-tasks-item-count', todayTasksLink);
        const thisWeekTasksCount = createEl('div', 'sidebar-tasks-item-count', weekTasksLink);

        allTasksCount.textContent = storedTasks.length;
        todaysTasksCount.textContent = todaysTasks.length;
        thisWeekTasksCount.textContent = thisWeekTasks.length;
    } else {
        allTasksLink.querySelector('.sidebar-tasks-item-count').textContent = storedTasks.length;
        todayTasksLink.querySelector('.sidebar-tasks-item-count').textContent = todaysTasks.length;
        weekTasksLink.querySelector('.sidebar-tasks-item-count').textContent = thisWeekTasks.length;
    }
}

function getPage() {
    allTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'All')
    });

    todayTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Today')
    });

    weekTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Week')
    });

    function loadPage(e, title) {
        e.preventDefault();
    
        const content = document.querySelector('.content');
        content.innerHTML = '';
    
        loadContent(title);
    }
}

function updateProjects() {

}

export { setSideBar as default, updateTaskCount };