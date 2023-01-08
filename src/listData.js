import { add, startOfToday, parseISO } from "date-fns";

let allProjects = {};

function retrieveStorage() {
    console.log('fix');
    let retrievedItems = [];
    for (let data in localStorage) {
        console.log(data);
        if (!data.startsWith("project") &&
        !data.startsWith("item")) {
            continue;
        }
        let retrievedData = localStorage.getItem(data);
        retrievedData = JSON.parse(retrievedData);
        if (data.startsWith("project")) {
            let arrayOfInfo = [retrievedData.title, retrievedData.notes,
            retrievedData.due, retrievedData.priority]
            addProject(...arrayOfInfo);
        } else if (data.startsWith("item")) {
            let arrayOfInfo = [retrievedData.title, retrievedData.notes,
            retrievedData.due, retrievedData.priority, retrievedData.project];
            let retrievedItem = addListItem(...arrayOfInfo);
            retrievedItems.push(retrievedItem);
        }
    }
    for (let item of retrievedItems) {
        item.addToProject();
    }
}


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
        for (let item of this.items) {
            localStorage.removeItem(`item-${this.title}-${item.title}`)
        }
        delete allProjects[this.title];
        localStorage.removeItem(`project-${this.title}`);
    }
}

function addProject(title, notes, due, priority) {
    let project = Object.create(projectMethods);
    project.title = title;
    project.notes = notes;
    if (due) {
        project.due = parseISO(due);
    } else {
        project.due = "";
    }
    project.priority = priority;
    project.items = [];
    allProjects[project.title] = project;
    localStorage.setItem(`project-${project.title}`,
        JSON.stringify({ title, notes, due, priority }));
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
    }
}
function addListItem(title, notes, due, priority, project) {
    let item = Object.create(itemMethods);
    item.title = title;
    item.notes = notes;
    if (due) {
        item.due = parseISO(due);
    } else {
        item.due = "";
    }
    item.priority = priority;
    item.project = project;
    localStorage.setItem(`item-${item.project}-${item.title}`,
        JSON.stringify(item));
    return item;
}

export {
    addProject, addListItem, allProjects, timeObjects,
    retrieveStorage
};


