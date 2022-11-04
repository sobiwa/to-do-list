import { addProject, addListItem } from "./listData";
import {
    createProjects, currentList,
    appendNewItem, openRecentProject
} from "./dom";
import { parseISO } from "date-fns";

const form = document.querySelector(".add-form");
const infoBtn = document.querySelector("button.info");
const hidden = document.querySelector(".hidden");
const submitBtn = document.querySelector(".submitBtn");
const cancelBtn = document.querySelector(".cancel");
const titleInput = document.querySelector("#title");
const formType = document.querySelector(".form-type");
let inputType = '';


const input = {
    title: document.querySelector("#title"),
    notes: document.querySelector("#notes"),
    due: document.querySelector("#due"),
}

function convertFormToData() {
    const title = input.title.value;
    const notes = input.notes.value;

    //converts input string to date object
    //avoiding time-zone complications
    let due = input.due.value
    if (due) {
        due = parseISO(due);
    }
    let priority;
    if (document.querySelector("input[name='priority']:checked")) {
        priority = document.querySelector("input[name='priority']:checked").value;
    } else {
        priority = "";
    }
    return [title, notes, due, priority];
}

function openForm(type) {
    if (type === "New Project") {
        inputType = "project"
    } else {
        inputType = "item";
    }
    formType.innerText = type;
    form.classList.add("visible");
}

function closeForm() {
    form.classList.remove("visible");
}

infoBtn.addEventListener("click", () => {
    if (hidden.style.maxHeight) {
        hidden.style.maxHeight = null;
        infoBtn.classList.remove("mdi-information-off-outline");
        infoBtn.classList.add("mdi-information-outline");
    } else {
        hidden.style.maxHeight = hidden.scrollHeight + "px";
        infoBtn.classList.remove("mdi-information-outline");
        infoBtn.classList.add("mdi-information-off-outline");
    }
});

submitBtn.addEventListener("click", () => {
    let input = convertFormToData();
    if (inputType === "project") {
        const project = addProject(...input);
        createProjects();
        openRecentProject();
    } else if (inputType === "item") {
        const projectTitle = currentList.title;
        const newItem = addListItem(...input, projectTitle);
        newItem.addToProject();
        appendNewItem(newItem);
    }
    form.reset();
    closeForm();
})

cancelBtn.addEventListener("click", () => {
    form.reset();
    closeForm();
})

titleInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
})


export { convertFormToData, openForm }