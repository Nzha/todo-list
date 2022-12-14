import { parseISO, isToday, isThisWeek } from 'date-fns';
import createEl from './functions';
import loadProjects from './projects'
import loadContent from './content';

const allTasksLink = document.querySelector('#all-tasks-link');
const todayTasksLink = document.querySelector('#today-tasks-link');
const weekTasksLink = document.querySelector('#week-tasks-link');

function setSideBar() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    loadProjects();
    getPages();
    sidebarControl();

    if (storedTasks) updateTaskCount();
}

function sidebarControl() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    hideMenuBtn.addEventListener('click', sidebarToggle);
    mediaQuery.addEventListener('change', hideSideBarAfterClickSmallScreens);

    hideSideBarAfterClickSmallScreens(mediaQuery);
}

function sidebarToggle() {
    const sideBarDiv = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const overlay = document.querySelector('.overlay');

    sideBarDiv.classList.toggle('hidden');
    content.classList.toggle('full-width');
    overlay.classList.toggle('off');
}

function hideSideBarAfterClickSmallScreens(mediaQuery) {
    const tasksCategories = document.querySelectorAll('.sidebar-tasks-item');
    const projectLinks = document.querySelectorAll('.sidebar-projects-item-link');

    if (mediaQuery.matches) {
        tasksCategories.forEach(tasksCategory => tasksCategory.addEventListener('click', sidebarToggle));
        projectLinks.forEach(projectLink => projectLink.addEventListener('click', sidebarToggle));
    } else {
        tasksCategories.forEach(tasksCategory => tasksCategory.removeEventListener('click', sidebarToggle));
        projectLinks.forEach(projectLink => projectLink.removeEventListener('click', sidebarToggle));
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

function getPages() {
    getTaskPage();
    getProjectPage();
}

function getTaskPage() {
    allTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'All')
    });

    todayTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Today')
    });

    weekTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Week')
    });
}

function getProjectPage() {
    const projectLinks = document.querySelectorAll('.sidebar-projects-item-link');
    projectLinks.forEach(projectLink => projectLink.addEventListener('click', loadPage));
}

function loadPage(e, title) {
    e.preventDefault();

    const content = document.querySelector('.content');
    content.innerHTML = '';

    loadContent(e, title);
}

export { setSideBar as default, hideSideBarAfterClickSmallScreens, updateTaskCount, getProjectPage };