function loadContent(title) {
    const contentDiv = document.querySelector('.content');

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-inner-container');
    contentDiv.appendChild(contentContainer);

    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    contentContainer.appendChild(contentHeader);

    const headerTitle = document.createElement('h2');
    headerTitle.classList.add('content-header-title');
    headerTitle.textContent = title;
    contentHeader.appendChild(headerTitle);
}

export default loadContent;