import './style.css';

function menuDisplay() {
    const hideMenuBtn = document.querySelector('#hide-menu-btn');
    const sideBarDiv = document.querySelector('.sidebar');

    hideMenuBtn.addEventListener('click', hideMenu);

    function hideMenu() {
        sideBarDiv.classList.toggle('hidden');
    }

}

menuDisplay();