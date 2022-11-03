import { allProjects, timeObjects } from "./listData";
import { openForm } from "./form";

const timeSection = document.querySelector(".time-cats");
const projectSection = document.querySelector(".projects");
const mainDisplay = document.querySelector(".main");
const titleDisplay = document.createElement("h1");
titleDisplay.classList.add("title-display");
const itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");

let currentList;
let itemArray = [];

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


function renderTimeTabs() {
    for (let object of timeObjects) {
        let tab = document.createElement("li");
        tab.classList.add("cat");
        tab.innerText = object.title;
        tab.addEventListener("click", () => {
            clearDisplay();
            openList(object);
        })
        timeSection.appendChild(tab);
    }
}

function createProjects() {
    removeProjects();
    const userProjects = document.createElement("ul");
    userProjects.classList.add("user-projects");
    // const projectTitles = allProjects.map(project => project.title);

    for (let project in allProjects) {
        let projectObject = allProjects[project];
        const tab = document.createElement("li");
        tab.innerText = `${projectObject.title}`;
        tab.classList.add("project");
        if (projectObject.priority) {
            tab.classList.add(`${projectObject.priority}`);
        }
        tab.addEventListener("click", () => {
            clearDisplay();
            openList(projectObject);
        })
        userProjects.appendChild(tab);
    }

    projectSection.appendChild(userProjects);
}

function removeProjects() {
    const userProjects = document.querySelector(".user-projects");
    if (userProjects) {
        userProjects.remove();
    }
}

function renderListItems(list) {
    itemArray = [];
    for (let i = 0; i < list.items.length; i++) {
        let item = list.items[i];
        let domItem = createItem(item);
        itemArray.push(domItem);
        domItem.renderView();
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
    domItem.itemText = item.title;

    return domItem
}

function openList(list = timeObjects[0]) {
    clearDisplay();
    currentList = list;
    titleDisplay.innerText = list.title;
    if (list.items.length) {
        renderListItems(list);
    }
}

function clearDisplay() {
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
    createProjects, openList, renderTimeTabs,
    currentList, appendNewItem
}