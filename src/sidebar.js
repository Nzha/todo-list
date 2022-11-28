import loadContent from './content';

function sidebarToggle() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const sideBarDiv = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    hideMenuBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sideBarDiv.classList.toggle('hidden');
        content.classList.toggle('full-width');
    }
}

function getPage() {
    const allTasksLink = document.querySelector('#all-tasks-link');
    const todayTasksLink = document.querySelector('#today-tasks-link');
    const upcomingTasksLink = document.querySelector('#week-tasks-link');

    allTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'All')
    });

    todayTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Today')
    });

    upcomingTasksLink.addEventListener('click', function(e) {
        loadPage(e, 'Week')
    });

    function loadPage(e, title) {
        e.preventDefault();
    
        const content = document.querySelector('.content');
        content.innerHTML = '';
    
        loadContent(title);
    }
}

getPage();

export default sidebarToggle;