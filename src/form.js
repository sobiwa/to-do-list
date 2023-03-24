import { getProjectId } from '.';
import { addProject, addListItem } from './listData';
import {
  createProjects,
  getCurrentList,
  appendNewItem,
  openProject,
} from './dom';
import { startOfToday, format, add } from 'date-fns';

const form = document.querySelector('.add-form');
const infoBtn = document.querySelector('button.info');
const hidden = document.querySelector('.hidden');
const submitBtn = document.querySelector('.submitBtn');
const cancelBtn = document.querySelector('.cancel');
const titleInput = document.querySelector('#title');
const formType = document.querySelector('.form-type');
const inputTitle = document.querySelector('.input-title');
let inputType = '';

const projectInput = document.createElement('input');
projectInput.setAttribute('id', 'item-project');
const projectInputLabel = document.createElement('label');
projectInputLabel.setAttribute('for', 'item-project');
projectInputLabel.innerText = 'Project';
const projectInputContainer = document.createElement('div');
projectInputContainer.append(projectInputLabel, projectInput);

const input = {
  title: document.querySelector('#title'),
  notes: document.querySelector('#notes'),
  due: document.querySelector('#due'),
};

function convertFormToData() {
  const title = input.title.value;
  const notes = input.notes.value;

  //converts input string to date object
  //avoiding time-zone complications
  let due = input.due.value;
  if (due) {
    due = input.due.value;
  }
  let priority;
  if (document.querySelector("input[name='priority']:checked")) {
    priority = document.querySelector("input[name='priority']:checked").value;
  } else {
    priority = '';
  }
  return { title, notes, due, priority };
}

function openForm(type) {
  projectInputContainer.remove();
  input.due.removeAttribute('disabled');
  input.due.removeAttribute('min');
  input.due.removeAttribute('max');
  input.due.removeAttribute('value');
  if (type === 'New Project') {
    inputType = 'project';
  } else if (type === 'item') {
    inputType = 'item';
  } else {
    inputType = 'time';
    restrictDateInput();
    inputTitle.insertAdjacentElement('afterend', projectInputContainer);
  }
  formType.innerText = type;
  form.classList.add('visible');
}

let todayDate = startOfToday();
let tomorrow = add(todayDate, { days: 1 });
let thisWeekDate = add(todayDate, { weeks: 1 });
let nextWeekDate = add(todayDate, { weeks: 2 });
todayDate = format(todayDate, 'yyyy-MM-dd');
tomorrow = format(tomorrow, 'yyyy-MM-dd');
thisWeekDate = format(thisWeekDate, 'yyyy-MM-dd');
nextWeekDate = format(nextWeekDate, 'yyyy-MM-dd');

function restrictDateInput() {
  const { title } = getCurrentList();
  if (title === 'Today') {
    input.due.setAttribute('value', todayDate);
    input.due.setAttribute('disabled', true);
  } else if (title === 'This Week') {
    input.due.setAttribute('value', tomorrow);
    input.due.setAttribute('min', tomorrow);
    input.due.setAttribute('max', thisWeekDate);
  } else if (title === 'Next Week') {
    input.due.setAttribute('value', thisWeekDate);
    input.due.setAttribute('min', thisWeekDate);
    input.due.setAttribute('max', nextWeekDate);
  } else if (title === 'Future') {
    input.due.setAttribute('value', nextWeekDate);
    input.due.setAttribute('min', nextWeekDate);
  }
}

function closeForm() {
  form.classList.remove('visible');
}

infoBtn.addEventListener('click', () => {
  if (hidden.style.maxHeight) {
    hidden.style.maxHeight = null;
    infoBtn.classList.remove('mdi-information-off-outline');
    infoBtn.classList.add('mdi-information-outline');
  } else {
    hidden.style.maxHeight = hidden.scrollHeight + 'px';
    infoBtn.classList.remove('mdi-information-outline');
    infoBtn.classList.add('mdi-information-off-outline');
  }
});

submitBtn.addEventListener('click', () => {
  const input = convertFormToData();
  switch (inputType) {
    case 'project':
      const newProject = addProject(input);
      createProjects();
      openProject(newProject);
      //   openRecentProject();
      break;
    case 'item':
      // newItem.addToProject();
      const { id, title } = getCurrentList();
      appendNewItem(
        addListItem({
          ...input,
          projectId: id,
          projectTitle: title,
        })
      );
      break;
    case 'time':
      let newItem;
      const projectTitle = projectInput.value;
      if (!projectTitle) {
        newItem = addListItem(input);
      } else {
        const existingProjectId = getProjectId(projectTitle);
        if (!existingProjectId) {
          const project = addProject({ title: projectTitle });
          newItem = addListItem({
            ...input,
            projectId: project.id,
            projectTitle: projectTitle,
          });
        } else {
          newItem = addListItem({
            ...input,
            projectId: existingProjectId,
            projectTitle: projectTitle,
          });
        }
      }
      // newItem.addToProject();
      appendNewItem(newItem);
      createProjects();
      break;
  }
  form.reset();
  closeForm();
});

cancelBtn.addEventListener('click', () => {
  form.reset();
  closeForm();
});

titleInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

export { convertFormToData, openForm };
