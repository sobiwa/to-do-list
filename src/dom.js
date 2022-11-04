import { allProjects, timeObjects } from "./listData";
import { openForm } from "./form";
import { format } from "date-fns";

const timeSection = document.querySelector(".time-cats");
const projectSection = document.querySelector(".projects");
const mainDisplay = document.querySelector(".main");
const titleDisplay = document.createElement("h1");
titleDisplay.classList.add("title-display");
const itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");
const projectDetails = document.querySelector(".project-details");

let currentList;
let itemArray = [];
let listArray = [];

const newItem = document.createElement("button");
const plusIcon = document.createElement("span");
newItem.innerText = "add";
plusIcon.classList.add("mdi", "mdi-playlist-plus");
newItem.appendChild(plusIcon);
newItem.classList.add("add-item");
newItem.addEventListener("click", () => {
    openForm("item");
})

mainDisplay.append(titleDisplay, itemContainer, newItem);

function renderTodayList() {
    timeObjects[0].compileArray();
    let domList = createList(timeObjects[0]);
    domList.openList();
}


function renderTimeTabs() {
    for (let object of timeObjects) {
        let tab = document.createElement("li");
        tab.classList.add("cat");
        tab.innerText = object.title;
        tab.addEventListener("click", () => {
            object.compileArray();
            let domList = createList(object);
            domList.openList();
        })
        timeSection.appendChild(tab);
    }
}

function createProjects() {
    listArray = [];
    removeProjects();
    const userProjects = document.createElement("ul");
    userProjects.classList.add("user-projects");

    for (let project in allProjects) {
        let projectObject = allProjects[project];
        // let domList = Object.assign(createList(projectObject), createTab);
        let domList = createProjectList(projectObject);
        listArray.push(domList);
        console.log(domList);
        userProjects.appendChild(domList.createTab());
    }
    projectSection.appendChild(userProjects);
}

function openRecentProject() {
    const recentProject = listArray[listArray.length - 1];
    recentProject.openList();
    recentProject.createDetailsBox();
}

const domListMethods = {
    openList() {
        clearDisplay();
        currentList = this.list;
        titleDisplay.innerText = this.list.title;
        if (this.list.items.length) {
            this.renderListItems();
        }
    },
    renderListItems() {
        itemArray = [];
        for (let i = 0; i < this.list.items.length; i++) {
            let item = this.list.items[i];
            let domItem = createItem(item);
            itemArray.push(domItem);
            domItem.renderView();
        }
    },
}

const createTab = {
    createTab() {
        const tab = document.createElement("li");
        tab.innerText = `${this.list.title}`;
        tab.classList.add("project");
        if (this.list.priority) {
            tab.classList.add(`${this.list.priority}`);
        }
        tab.addEventListener("click", () => {
            this.openList();
            this.createDetailsBox();
        })
        return tab;
    },
}

const createDetailsBox = {
    createDetailsBox() {
        // let content = false;
        var box = document.createElement("div");
        if (this.list.due |
            this.list.notes |
            this.list.priority) {
            box.classList.add("details-box");
        //     content = true;
        }
        if (this.list.due) {
            const due = document.createElement("div");
            const dueTitle = document.createElement("div");
            dueTitle.classList.add("detail-title");
            dueTitle.innerText = "Due"
            const dueContent = document.createElement("div");
            let formattedDate = format(this.list.due, "PPPP");
            dueContent.innerText = formattedDate;
            due.append(dueTitle, dueContent);
            box.appendChild(due);
        }

        if (this.list.notes) {
            const notes = document.createElement("div");
            const notesTitle = document.createElement("div");
            notesTitle.classList.add("detail-title");
            notesTitle.innerText = "Notes";
            const notesContent = document.createElement("div");
            notesContent.classList.add("project-notes");
            notesContent.innerText = this.list.notes;
            notes.append(notesTitle, notesContent);
            box.appendChild(notes);
        }

        if (this.list.priority) {
            const priority = document.createElement("div");
            const priorityTitle = document.createElement("div");
            priorityTitle.classList.add("detail-title");
            priorityTitle.innerText = "Priority";
            const priorityContent = document.createElement("div");
            priorityContent.innerText = this.list.priority;
            priority.append(priorityTitle, priorityContent);
            box.appendChild(priority);
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("mdi", "mdi-delete-circle-outline");
        deleteBtn.classList.add("delete-button");
        const deleteBtnText = document.createElement("div");
        deleteBtnText.classList.add("delete-button-text");
        deleteBtnText.innerText = "Delete List";
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.addEventListener("click", () => {
            this.list.deleteProject();
            createProjects();
            renderTodayList();
        })
        // deleteBtn.addEventListener("mouseover", () => {
        //         deleteBtnText.style.maxWidth = deleteBtnText.scrollWidth + "px";
        //     })

        box.appendChild(deleteBtn);


        // if (content) {
        projectDetails.appendChild(box);
        // };
    },
};



function createList(list) {
    const domList = Object.create(domListMethods);
    domList.list = list;
    return domList
}

function createProjectList(list) {
    let proto = Object.assign(domListMethods, createTab,
        createDetailsBox);
    let domList = Object.create(proto);
    domList.list = list;
    return domList;
}

function removeProjects() {
    const userProjects = document.querySelector(".user-projects");
    if (userProjects) {
        userProjects.remove();
    }
}

function appendNewItem(item) {
    const domItem = createItem(item);
    itemArray.push(domItem);
    domItem.renderView();
}

const domItemMethods = {
    deleteItem() {
        this.item.removeFromProject();
    },
    renderView() {
        const itemDisplay = document.createElement("li");
        itemDisplay.classList.add("list-item");
        itemDisplay.append(this.checkbox, this.itemText);
        if (itemContainer.firstChild) {
            itemContainer.firstChild.appendChild(itemDisplay);
        } else {
            const items = document.createElement("ul");
            items.appendChild(itemDisplay);
            itemContainer.appendChild(items);
        }
    }
}

function createItem(item) {
    const domItem = Object.create(domItemMethods);

    const idTag = `item-${item.title}`

    const itemText = document.createElement("label");
    itemText.setAttribute("for", idTag);
    itemText.innerText = item.title;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", idTag);

    domItem.item = item;
    domItem.checkbox = checkbox;
    domItem.itemText = itemText;

    return domItem
}


function clearDisplay() {
    if (projectDetails.firstChild) {
        projectDetails.removeChild(projectDetails.firstChild);
    }
    if (itemContainer.firstChild) {
        for (let item of itemArray) {
            if (item.checkbox.checked) {
                item.deleteItem();
            }
        }
        itemContainer.removeChild(itemContainer.firstChild);
    }
}

export {
    createProjects, openRecentProject, renderTimeTabs,
    currentList, appendNewItem, renderTodayList,
}