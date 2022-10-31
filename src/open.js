import retrieveList from "./listData.js"

export default function openList(title) {
    const container = document.createElement("div");
    const titleDisplay = document.createElement("h1");
    titleDisplay.innerText = title;

    const newItem = document.createElement("button");
    const plusIcon = document.createElement("span");
    newItem.innerText = "add";
    plusIcon.classList.add("mdi", "mdi-playlist-plus");
    newItem.appendChild(plusIcon);
    newItem.classList.add("add-item");


    container.append(titleDisplay, newItem);

    return container;

}