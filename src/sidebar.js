function sidebarDisplay() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const sideBarDiv = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    hideMenuBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sideBarDiv.classList.toggle('hidden');
        content.classList.toggle('full-width');
    }
}

export default sidebarDisplay;