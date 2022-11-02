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

    allProjects.forEach((project, index) => {
        const tab = document.createElement("li");
        tab.innerText = `${project.title}`;
        tab.classList.add("project");
        tab.dataset.index = index;
        if (project.priority) {
            tab.classList.add(`${project.priority}`);
        }
        tab.addEventListener("click", () => {
            clearDisplay();
            openList(project);
        })
        userProjects.appendChild(tab);
    })

    projectSection.appendChild(userProjects);
}

function removeProjects() {
    const userProjects = document.querySelector(".user-projects");
    if (userProjects) {
        userProjects.remove();
    }
}

function renderListItems(list) {
    const items = document.createElement("div");
    for (let i = 0; i < list.items.length; i++) {
        let item = document.createElement("div");
        item.innerText = list.items[i].title;
        items.appendChild(item);
    }
    itemContainer.appendChild(items);
}

function appendNewItem(item) {
    const itemDisplay = document.createElement("div");
    itemDisplay.innerText = item.title;
    if (itemContainer.firstChild) {
        itemContainer.firstChild.appendChild(itemDisplay);
    } else {
        itemContainer.appendChild(itemDisplay);
    }
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
        itemContainer.removeChild(itemContainer.firstChild);
    }
}



export {
    createProjects, openList, renderTimeTabs,
    currentList, appendNewItem
}