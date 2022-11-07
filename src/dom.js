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
    currentList.type = "time";
}


function renderTimeTabs() {
    for (let object of timeObjects) {
        let tab = document.createElement("li");
        tab.classList.add("cat");
        tab.innerText = object.title;
        tab.addEventListener("click", () => {
            clearDisplay();
            object.compileArray();
            let domList = createList(object);
            domList.openList();
            currentList.type = "time";
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
    const detailBox = recentProject.createDetailsBox();
    const delBtn = recentProject.makeDeleteButton();
    detailBox.appendChild(delBtn);
    projectDetails.appendChild(detailBox);
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
            const detailBox = this.createDetailsBox();
            const delBtn = this.makeDeleteButton();
            detailBox.appendChild(delBtn);
            projectDetails.appendChild(detailBox);
            currentList.type = "project";
        })
        return tab;
    },
}

const createDetailsBox = (state) => ({
    createDetailsBox() {
        var box = document.createElement("div");
        if (state.due |
            state.notes |
            state.priority) {
            box.classList.add("details-box");
        }
        if (state.due) {
            const due = document.createElement("div");
            const dueTitle = document.createElement("div");
            dueTitle.classList.add("detail-title");
            dueTitle.innerText = "Due"
            const dueContent = document.createElement("div");
            console.log(state.due);
            let formattedDate = format(state.due, "PPPP");
            dueContent.innerText = formattedDate;
            due.append(dueTitle, dueContent);
            box.appendChild(due);
        }

        if (state.notes) {
            const notes = document.createElement("div");
            const notesTitle = document.createElement("div");
            notesTitle.classList.add("detail-title");
            notesTitle.innerText = "Notes";
            const notesContent = document.createElement("div");
            notesContent.classList.add("project-notes");
            notesContent.innerText = state.notes;
            notes.append(notesTitle, notesContent);
            box.appendChild(notes);
        }

        if (state.priority) {
            const priority = document.createElement("div");
            const priorityTitle = document.createElement("div");
            priorityTitle.classList.add("detail-title");
            priorityTitle.innerText = "Priority";
            const priorityContent = document.createElement("div");
            priorityContent.innerText = state.priority;
            priority.append(priorityTitle, priorityContent);
            box.appendChild(priority);
        }

        return box
    }
});

const createProjectDeleteButton = (state) => ({
    makeDeleteButton() {
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("mdi", "mdi-delete-circle-outline");
        deleteBtn.classList.add("delete-button");
        const deleteBtnText = document.createElement("div");
        deleteBtnText.classList.add("delete-button-text");
        deleteBtnText.innerText = "Delete List";
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.addEventListener("click", () => {
            state.deleteProject();
            createProjects();
            renderTodayList();
        })
        return deleteBtn;
    }
})

function createList(list) {
    const domList = Object.create(domListMethods);
    domList.list = list;
    return domList
}

function createProjectList(list) {
    let proto = Object.assign(domListMethods, createTab);
    let domList = Object.create(proto);
    domList = Object.assign(domList, createDetailsBox(list), createProjectDeleteButton(list));
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
        const info = document.createElement("button");
        info.classList.add("item-info-button", "mdi", "mdi-information-outline");
        info.addEventListener("click", () => {
            if (info.firstChild) {
                info.removeChild(info.firstChild);
            } else {
                const detailBox = this.createDetailsBox();
                detailBox.classList.add("item-details");
                if (currentList.type === "time") {
                    const projectFamily = document.createElement("div")
                    const projectFamilyTitle = document.createElement("div");
                    projectFamilyTitle.classList.add("detail-title");
                    projectFamilyTitle.innerText = "Project";
                    const projectFamilyContent = document.createElement("div");
                    projectFamilyContent.innerText = this.item.project;
                    projectFamily.append(projectFamilyTitle, projectFamilyContent);
                    detailBox.appendChild(projectFamily);
                }
                if (!detailBox.firstChild) {
                    let noContent = document.createElement("div");
                    noContent.innerText = "No information available";
                    detailBox.appendChild(noContent);
                }
                info.appendChild(detailBox);
            }
        })
        info.addEventListener("mouseleave", () => {
            if (info.firstChild) {
                info.removeChild(info.firstChild);
            }
        })
        itemDisplay.appendChild(info);

        if (itemContainer.firstChild) {
            itemContainer.firstChild.appendChild(itemDisplay);
        } else {
            const items = document.createElement("ul");
            items.appendChild(itemDisplay);
            itemContainer.appendChild(items);
        }
    },
}

function createItem(item) {
    let domItem = Object.create(domItemMethods);

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

    domItem = Object.assign(domItem, createDetailsBox(item));

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