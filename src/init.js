import updateHeader from './updateHeader';
import { openForm } from './form.js';
import { createProjects, renderTimeTabs, renderTodayList } from './dom.js';
import { retrieveStorage } from './listData.js';

const newProject = document.querySelector('.new-project');

function openNewProjectForm() {
  openForm('New Project');
}

export default async function (user) {
  //   if (localStorage.length) {
  // retrieveStorage();
  // createProjects();
  //   }

  if (user) {
    await createProjects();
    renderTodayList();
    renderTimeTabs();
    newProject.addEventListener('click', openNewProjectForm);
  } else {
    newProject.removeEventListener('click', openNewProjectForm);
  }
}
