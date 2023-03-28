import { focusForm, openForm } from './form.js';
import signIn from './signIn.js';
import {
  createProjects,
  renderTimeTabs,
  renderTodayList,
  clearDisplay,
} from './dom.js';

const newProject = document.querySelector('.new-project');
const timeCats = document.querySelector('.time-cats');

function openNewProjectForm() {
  openForm('New Project');
  focusForm();
}

function openSignInForm() {
  const app = document.querySelector('.app-container');
  app.append(signIn());
}

const mainDisplay = document.querySelector('.main');
const titleDisplay = document.createElement('h1');
titleDisplay.classList.add('title-display');
const itemContainer = document.createElement('div');
itemContainer.classList.add('item-container');
const newItem = document.createElement('button');
const plusIcon = document.createElement('span');
newItem.innerText = 'add';
plusIcon.classList.add('mdi', 'mdi-playlist-plus');
newItem.appendChild(plusIcon);
newItem.classList.add('add-item');
newItem.addEventListener('click', () => {
  openForm('item');
  focusForm();
});

export default async function (user) {
  const userProjects = document.querySelector('.user-projects');

  if (user) {
    await createProjects();
    renderTodayList();
    renderTimeTabs();
    mainDisplay.append(titleDisplay, itemContainer, newItem);
    newProject.removeEventListener('click', openSignInForm);
    newProject.addEventListener('click', openNewProjectForm);
  } else {
    clearDisplay();
    while (timeCats.firstChild) {
      timeCats.removeChild(timeCats.firstChild);
    }
    if (userProjects) {
      userProjects.remove();
    }
    titleDisplay.remove();
    itemContainer.remove();
    newItem.remove();
    newProject.removeEventListener('click', openNewProjectForm);
    newProject.addEventListener('click', openSignInForm);
  }
}
