import createEl, { increment } from './functions';
import { getProjectPage } from './sidebar';

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

        myProjects.forEach(project => createProjectEl(project, true));
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
        createProjectEl(newProject, true);
    }
}

function createProjectEl(project, container, parentEl) {
    const projectList = document.querySelector('.sidebar-projects');
    const projectFormContainer = document.querySelector('.project-form-container');
    const projectForm = document.querySelector('.project-form');

    // Container required if a new project or a locally stored one is added, not when editing one.
    if (container) {
        const projectContainer = createEl('li', 'sidebar-projects-container', projectList);
        projectContainer.setAttribute('id', `project-${project.id}`);
        parentEl = projectContainer;
    }

    // NAME
    const projectDiv = createEl('div', 'sidebar-projects-item', parentEl);
    const projectLink = createEl('a', 'sidebar-projects-item-link', projectDiv);
    const projectTxt = createEl('div', 'sidebar-projects-item-txt', projectLink);
    projectTxt.textContent = project.name;

    // OPTIONS
    const projectOptionContainer = createEl('div', 'sidebar-projects-options', projectLink);
    const optionsBtn = createEl('div', 'sidebar-projects-options-btn', projectOptionContainer);
    optionsBtn.classList.add('fa-solid', 'fa-ellipsis-vertical');

    // Insert project into list before form
    if (projectForm) projectList.insertBefore(parentEl, projectFormContainer);

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

    dropdownEdit.addEventListener('click', editProject);
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

function createProjectForm(container, parentEl) {
    // Return if a new project form is already displayed
    if (document.querySelector('.project-form-container')) return;

    // Container required for new project form, not for editing project form.
    if (container) {
        const projectList = document.querySelector('.sidebar-projects');
        const projectForm = document.querySelector('.project-form');
        const projectFormContainer = createEl('li', 'project-form-container', projectList);
        parentEl = projectFormContainer;

        // Remove existing project form if any
        if (projectForm) {
            const projectContainer = projectForm.closest('.sidebar-projects-container');
            const myProject = myProjects.find(el => el.id == projectContainer.id.replace(/\D/g,''));

            projectForm.remove();
            createProjectEl(myProject, false, projectContainer);
        }
    } 

    const projectForm = createEl('form', 'project-form', parentEl);
    const projectInput = createEl('input', 'projectName', projectForm);

    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'projectName');
    projectInput.setAttribute('name', 'projectName');
    projectInput.setAttribute('placeholder', 'Project name');
    projectInput.setAttribute('autocomplete', 'off');
    projectInput.setAttribute('maxlength', '25');
    projectInput.focus();

    const btnContainer = createEl('div', 'form-project-btn-container', projectForm);

    const cancelBtn = createEl('button', 'cancel-project-form-btn', btnContainer);
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', cancelProjectForm)

    const addBtn = createEl('button', 'add-project-form-btn', btnContainer);

    if (container) {
        addBtn.textContent = 'Add project';
        addBtn.addEventListener('click', addProject);
    } else {
        addBtn.textContent = 'Save';
        addBtn.addEventListener('click', saveProjectEdits);
    }
}

function cancelProjectForm(e) {
    e.preventDefault();
    const projectFormContainer = document.querySelector('.project-form-container');

    // projectFormContainer only exists when adding a project, not when editing one
    if (projectFormContainer) {
        projectFormContainer.remove();
    } else {
        const eventProjectContainer = e.target.closest('.sidebar-projects-container');
        const projectForm = document.querySelector('.project-form');

        // Find task in myProjects for which id matches div id (without non-digits characters)
        const myProject = myProjects.find(el => el.id == eventProjectContainer.id.replace(/\D/g,''));

        projectForm.remove();
        createProjectEl(myProject, false, eventProjectContainer);
    }
}

function addProject(e) {
    e.preventDefault();
    const projectNameInput = document.querySelector('#projectName');
    const projectFormContainer = document.querySelector('.project-form-container');

    let projectName = projectNameInput.value;

    if (!projectName) return;

    getProjects(projectName);
    getProjectPage();
    projectFormContainer.remove();
    console.table(myProjects);
}

function editProject(e) {
    const projectContainer = e.target.closest('.sidebar-projects-container');
    const myProject = myProjects.find(el => el.id == projectContainer.id.replace(/\D/g,''));

    // Remove project form if one is already displayed
    const projectFormContainer = document.querySelector('.project-form-container');
    if (projectFormContainer) projectFormContainer.remove();

    projectContainer.textContent = '';
    createProjectForm(false, projectContainer);
    document.querySelector('.projectName').value = myProject.name;
    document.querySelector('.projectName').focus();
}

function saveProjectEdits(e) {
    e.preventDefault();
    const projectContainer = e.target.closest('.sidebar-projects-container');
    const projectForm = document.querySelector('.project-form');
    const projectNameInput = document.querySelector('#projectName');
    const myProject = myProjects.find(el => el.id == projectContainer.id.replace(/\D/g,''));

    myProject.name = projectNameInput.value;

    if (!myProject.name) return;

    localStorage.setItem('projects', JSON.stringify(myProjects));

    projectForm.remove();
    createProjectEl(myProject, false, projectContainer);
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