import { openList } from "./dom.js"

let allProjects = [];

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
    openList: openList(this),
}

function addProject(title, notes, due, priority) {
    let project  = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    project.due = due;
    project.priority = priority;
    project.items = [];
    allProjects.push(project);
    console.log(allProjects);
    return project;
}

const itemMethods = {
    addToProject() {
        let project  = this.project;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].title === project) {
                allProjects[i].items.push(this);
            }
        }
        console.log(allProjects);
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


