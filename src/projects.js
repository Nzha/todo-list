import createEl, { increment } from './functions';

const storedProjects = JSON.parse(localStorage.getItem('projects'));
const addProjectBtn = document.querySelector('.projects-add-btn');

let myProjects = [];

const project = (id, name) => {
    return {id, name};
}

// localStorage.clear();

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
    const projectList = document.querySelector('.sidebar-projects');
    const projectDiv = createEl('li', 'sidebar-projects-item', projectList);
    const projectLink = createEl('a', 'sidebar-projects-item-link', projectDiv);
    const projectTxt = createEl('div', 'sidebar-projects-item-txt', projectLink);
    
    projectDiv.setAttribute('id', `project-${project.id}`);
    projectTxt.textContent = project.name;
}

function createProjectForm() {
    const projectList = document.querySelector('.sidebar-projects');
    const projectDiv = createEl('li', 'sidebar-projects-item', projectList);
    const projectForm = createEl('form', 'project-form', projectDiv);
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
    // cancelTaskBtn.addEventListener('click', cancelTaskForm)

    const addTaskBtn = createEl('button', 'add-project-form-btn', btnContainer);

    addTaskBtn.textContent = 'Add task';
    addTaskBtn.addEventListener('click', addProject);
}

function addProject(e) {
    e.preventDefault();
    
    const projectNameInput = document.querySelector('#projectName');

    let projectName = projectNameInput.value;

    if (!projectName) return;

    getProjects(projectName);
}

export { loadProject as default };