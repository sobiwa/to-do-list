import {
  addProjectToFirebase,
  addListItemToFirebase,
  fetchItemsFromFirebase,
} from '.';
import { add, startOfToday, parseISO } from 'date-fns';
import uniqid from 'uniqid';

let allProjects = {};

function retrieveStorage() {
  let retrievedItems = [];
  for (let data in localStorage) {
    console.log(data);
    if (!data.startsWith('project') && !data.startsWith('item')) {
      continue;
    }
    let retrievedData = localStorage.getItem(data);
    retrievedData = JSON.parse(retrievedData);
    if (data.startsWith('project')) {
      let arrayOfInfo = [
        retrievedData.title,
        retrievedData.notes,
        retrievedData.due,
        retrievedData.priority,
      ];
      addProject(...arrayOfInfo);
    } else if (data.startsWith('item')) {
      let arrayOfInfo = [
        retrievedData.title,
        retrievedData.notes,
        retrievedData.due,
        retrievedData.priority,
        retrievedData.project,
      ];
      let retrievedItem = addListItem(...arrayOfInfo);
      retrievedItems.push(retrievedItem);
    }
  }
  for (let item of retrievedItems) {
    item.addToProject();
  }
}

const timeMethods = {
  async compileArray() {
    this.items = [];
    const allItems = await fetchItemsFromFirebase();
    console.log(allItems);
    for (const item of allItems) {
      console.log(item);
      const { due } = item;
      const processedDue = parseISO(due);
      if (processedDue) {
        if (this.end) {
          if (processedDue >= this.begin && processedDue < this.end) {
            this.items.push(item);
          }
        } else {
          if (processedDue >= this.begin) {
            this.items.push(item);
          }
        }
      }
    }
  },
};

function createTimeObject(title, begin, end) {
  let time = Object.create(timeMethods);
  time.title = title;
  time.items = [];
  time.begin = begin;
  time.end = end;
  return time;
}

let todayDate = startOfToday();
let tomorrow = add(todayDate, { days: 1 });
let thisWeekDate = add(todayDate, { weeks: 1 });
let nextWeekDate = add(todayDate, { weeks: 2 });

let today = createTimeObject('Today', todayDate, tomorrow);
let thisWeek = createTimeObject('This Week', tomorrow, thisWeekDate);
let nextWeek = createTimeObject('Next Week', thisWeekDate, nextWeekDate);
let future = createTimeObject('Future', nextWeekDate);

let timeObjects = [today, thisWeek, nextWeek, future];

const projectMethods = {
  deleteProject() {
    for (let item of this.items) {
      localStorage.removeItem(`item-${this.title}-${item.title}`);
    }
    delete allProjects[this.title];
    localStorage.removeItem(`project-${this.title}`);
  },
};

function addProject({ title, notes = '', due = '', priority = '', id }) {
  // let project = Object.create(projectMethods);
  // project.title = title;
  // project.notes = notes;
  // if (due) {
  //     project.due = parseISO(due);
  // } else {
  //     project.due = "";
  // }
  // project.priority = priority;
  // project.items = [];
  // allProjects[project.title] = project;
  // localStorage.setItem(`project-${project.title}`,
  //     JSON.stringify({ title, notes, due, priority }));
  // return project;

  const project = {
    title,
    notes,
    due: due ?? '',
    priority,
    id: id ?? uniqid(),
  };

  addProjectToFirebase(project);

  return project;
}

const itemMethods = {
  addToProject() {
    allProjects[this.project].items.push(this);
  },
  removeFromProject() {
    const index = allProjects[this.project].items.indexOf(this);
    allProjects[this.project].items.splice(index, 1);
    localStorage.removeItem(`item-${this.project}-${this.title}`);
  },
};
function addListItem({
  title,
  notes,
  due,
  priority,
  projectId = 'strays',
  projectTitle = 'Strays',
}) {
  //   let item = Object.create(itemMethods);
  //   item.title = title;
  //   item.notes = notes;
  //   if (due) {
  //     item.due = parseISO(due);
  //   } else {
  //     item.due = '';
  //   }
  //   item.priority = priority;
  //   item.project = project;
  //   localStorage.setItem(
  //     `item-${item.project}-${item.title}`,
  //     JSON.stringify(item)
  //   );

  const item = {
    title,
    notes,
    due: due ?? '',
    priority,
    projectTitle,
    projectId,
    id: uniqid(),
  };

  addListItemToFirebase(item);

  return item;
}

export { addProject, addListItem, allProjects, timeObjects, retrieveStorage };
