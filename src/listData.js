import { openList } from "./dom.js"

let allProjects = {};

const timeMethods = {

}

function createTimeObject(title) {
    let time  = Object.create(timeMethods);
    time.title = title;
    time.items = [];
    return time
}

let today = createTimeObject("Today");
let thisWeek = createTimeObject("This Week");
let nextWeek = createTimeObject("Next Week");
let future = createTimeObject("Future");

let timeObjects  = [today, thisWeek, nextWeek, future];

const projectMethods = {
    deleteProject() {
        delete allProjects[this.title];
    }
}

function addProject(title, notes, due, priority) {
    let project  = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    project.due = due;
    project.priority = priority;
    project.items = [];
    allProjects[project.title] = project;
    console.log(allProjects);
    return project;
}

const itemMethods = {
    addToProject() {
        allProjects[this.project].items.push(this);
        console.log(allProjects);
    },
    removeFromProject() {
        const index = allProjects[this.project].items.indexOf(this);
        allProjects[this.project].items.splice(index, 1);
    }
}
function addListItem(title, notes, due, priority, project) {
    let item = Object.create(itemMethods);
    item.title = title;
    item.notes = notes;
    item.due = due;
    item.priority = priority;
    item.project = project;
    console.log(item);
    return item;
}

export { addProject, addListItem, allProjects, timeObjects };


