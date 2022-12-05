import createEl, { increment } from './functions';

const storedProjects = JSON.parse(localStorage.getItem('projects'));
const addProjectBtn = document.querySelector('.projects-add-btn');

let myProjects = [];

const project = (id, name) => {
    return {id, name};
}

// localStorage.clear();

document.addEventListener('click', closeMenuOnOutsideClick);
addProjectBtn.addEventListener('click', createProjectForm);

function loadProject() {
    if (storedProjects) {
        // Update myProjects with locally stored projects
        myProjects = JSON.parse(localStorage.getItem('projects'));

        myProjects.forEach(project => createProjectEl(project));
    } else {
        getProjects('Personal', 'Shopping', 'Work', 'Movies to watch');
    }
}

function getProjects(...names) {
    for (const name of names) {
        let id = increment();

        // Prevent identical IDs
        myProjects.forEach(myProject => {if (myProject.id == id) id = increment()});

        const newProject = project(id, name);
        myProjects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(myProjects));
        createProjectEl(newProject);
    }
}

function createProjectEl(project) {
    const projectForm = document.querySelector('.project-form');
    const projectFormContainer = document.querySelector('.project-form-container');

    // PROJECT NAME
    const projectList = document.querySelector('.sidebar-projects');
    const projectContainer = createEl('li', 'sidebar-projects-container', projectList);
    const projectDiv = createEl('div', 'sidebar-projects-item', projectContainer);
    const projectLink = createEl('a', 'sidebar-projects-item-link', projectDiv);
    const projectTxt = createEl('div', 'sidebar-projects-item-txt', projectLink);
    projectContainer.setAttribute('id', `project-${project.id}`);
    projectTxt.textContent = project.name;

    // OPTIONS
    const projectOptionContainer = createEl('div', 'sidebar-projects-options', projectLink);
    const optionsBtn = createEl('div', 'sidebar-projects-options-btn', projectOptionContainer);
    optionsBtn.classList.add('fa-solid', 'fa-ellipsis-vertical');

    // Insert project into list before form
    if (projectForm) projectList.insertBefore(projectContainer, projectFormContainer);

    const optionsBtns = document.querySelectorAll('.sidebar-projects-options');
    optionsBtns.forEach(optionBtn => optionBtn.addEventListener('click', toggleOptionsMenu));
}

function toggleOptionsMenu(e) {
    const projectOptionContainer = e.target.closest('.sidebar-projects-item-link .sidebar-projects-options');
    const eventDropdownMenu = projectOptionContainer.querySelector('.dropdown-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!eventDropdownMenu) {
        if (dropdownMenu) dropdownMenu.remove();
        createOptionMenuEl(e);
    }  else {
        eventDropdownMenu.remove();
    }
}

function createOptionMenuEl(e) {
    const projectOptionContainer = e.target.closest('.sidebar-projects-options');
    const dropdownMenu = createEl('div', 'dropdown-menu', projectOptionContainer);
    const dropdownEdit = createEl('div', 'dropdown-menu-edit', dropdownMenu);
    const dropdownDelete = createEl('div', 'dropdown-menu-delete', dropdownMenu);
    dropdownEdit.textContent = 'Edit';
    dropdownDelete.textContent = 'Delete';

    dropdownDelete.addEventListener('click', deleteProject);

    // Add a class making the text not selectable to prevent occasional default highlighting
    dropdownEdit.classList.add('noselect');
    dropdownDelete.classList.add('noselect');
}

function closeMenuOnOutsideClick(e) {
    if (!e.target.closest('.sidebar-projects-options')) {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(dropdownMenu => dropdownMenu.remove());
    }
}

function createProjectForm() {
    const projectList = document.querySelector('.sidebar-projects');
    const projectFormContainer = createEl('li', 'project-form-container', projectList);
    const projectForm = createEl('form', 'project-form', projectFormContainer);
    const projectInput = createEl('input', 'project-name', projectForm);

    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'projectName');
    projectInput.setAttribute('name', 'projectName');
    projectInput.setAttribute('placeholder', 'Project name');
    projectInput.setAttribute('autocomplete', 'off');
    projectInput.setAttribute('maxlength', '25');
    projectInput.focus();

    const btnContainer = createEl('div', 'form-btn-container', projectForm);

    const cancelTaskBtn = createEl('button', 'cancel-project-form-btn', btnContainer);
    cancelTaskBtn.textContent = 'Cancel';
    cancelTaskBtn.addEventListener('click', cancelProjectForm)

    const addTaskBtn = createEl('button', 'add-project-form-btn', btnContainer);
    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', addProject);
}

function cancelProjectForm(e) {
    e.preventDefault();
    const projectForm = document.querySelector('.project-form');
    projectForm.remove();
}

function addProject(e) {
    e.preventDefault();
    const projectNameInput = document.querySelector('#projectName');
    const projectForm = document.querySelector('.project-form');

    let projectName = projectNameInput.value;

    if (!projectName) return;

    getProjects(projectName);
    projectForm.remove();
    console.table(myProjects);
}

function deleteProject(e) {
    const projectContainer = e.target.closest('.sidebar-projects-container');
    const myProjectIndex = myProjects.findIndex(el => el.id == projectContainer.id.replace(/\D/g,''));

    myProjects.splice(myProjectIndex, 1);
    localStorage.setItem('projects', JSON.stringify(myProjects));
    projectContainer.remove();
    console.table(myProjects);
}

export { loadProject as default };