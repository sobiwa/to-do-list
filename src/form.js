import { getProjectId, queryStraysExistence } from '.';
import { addProject, addListItem } from './listData';
import { getCurrentList, appendNewItem, appendNewProject } from './dom';
import { startOfToday, format, add } from 'date-fns';

const form = document.querySelector('.add-form');
const infoBtn = document.querySelector('button.info');
const hidden = document.querySelector('.hidden');
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
  title: titleInput,
  notes: document.querySelector('#notes'),
  due: document.querySelector('#due'),
};

function convertFormToData() {
  const title = input.title.value;
  const notes = input.notes.value;
  const due = input.due.value;

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
  } else {
    if (getCurrentList().type === 'time') {
      inputType = 'time';
      restrictDateInput();
      inputTitle.insertAdjacentElement('afterend', projectInputContainer);
    } else {
      inputType = 'item';
    }
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

form.onsubmit = async (e) => {
  e.preventDefault();
  const input = convertFormToData();
  switch (inputType) {
    case 'project':
      const newProject = addProject(input);
      appendNewProject(newProject, true);
      break;
    case 'item':
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
        const straysExists = await queryStraysExistence();
        if (!straysExists) {
          const project = addProject({
            title: 'Strays',
            id: 'strays',
            notes: 'Here resides tasks created without a project association',
          });
          appendNewProject(project);
        }
        newItem = addListItem(input);
      } else {
        const existingProjectId = await getProjectId(projectTitle);
        if (!existingProjectId) {
          const project = addProject({ title: projectTitle });
          appendNewProject(project);
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
      appendNewItem(newItem);
      break;
  }
  form.reset();
  closeForm();
};

cancelBtn.addEventListener('click', () => {
  form.reset();
  closeForm();
});

function focusForm() {
  setTimeout(() => {
    document.getElementById('title').focus();
  }, 350);
}

export { convertFormToData, openForm, focusForm };
