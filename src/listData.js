import { add, startOfToday } from "date-fns";
import { allProjects } from "./init";

const timeMethods = {
    compileArray() {
        this.items = [];
        for (let project in allProjects) {
            if (allProjects[project].items) {
                for (let item of allProjects[project].items) {
                    if (item.due) {

                        let due = item.due;
                        if (this.end) {
                            if (due >= this.begin && due < this.end) {
                                this.items.push(item);
                                console.log(this.items);
                            }
                        } else {
                            if (due >= this.begin) {
                                this.items.push(item);
                            }
                        }
                    }
                }
            }
        }
    }
}

function createTimeObject(title, begin, end) {
    let time = Object.create(timeMethods);
    time.title = title;
    time.items = [];
    time.begin = begin;
    time.end = end;
    return time
}

let todayDate = startOfToday();
let tomorrow = add(todayDate, { days: 1 });
let thisWeekDate = add(todayDate, { weeks: 1 });
let nextWeekDate = add(todayDate, { weeks: 2 });

let today = createTimeObject("Today", todayDate, tomorrow);
let thisWeek = createTimeObject("This Week", tomorrow, thisWeekDate);
let nextWeek = createTimeObject("Next Week", thisWeekDate, nextWeekDate);
let future = createTimeObject("Future", nextWeekDate);

let timeObjects = [today, thisWeek, nextWeek, future];

const projectMethods = {
    deleteProject() {
        delete allProjects[this.title];
    }
}

function addProject(title, notes, due, priority) {
    let project = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    project.due = due;
    project.priority = priority;
    project.items = [];
    allProjects[project.title] = project;
    localStorage.setItem("savedData", allProjects);
    return project;
}

const itemMethods = {
    addToProject() {
        allProjects[this.project].items.push(this);
        localStorage.setItem("savedData", allProjects);
    },
    removeFromProject() {
        const index = allProjects[this.project].items.indexOf(this);
        allProjects[this.project].items.splice(index, 1);
        localStorage.setItem("savedData", allProjects);
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


