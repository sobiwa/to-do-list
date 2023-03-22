import updateHeader from './updateHeader'
import { openForm } from "./form.js";
import { createProjects, renderTimeTabs, renderTodayList } from "./dom.js";
import { retrieveStorage } from "./listData.js";

const newProject = document.querySelector(".new-project");

export default function (user) {
    if (localStorage.length) {
        retrieveStorage();
        createProjects();
    }
    
    updateHeader(user);

    renderTodayList();
    renderTimeTabs();

    newProject.addEventListener("click", () => {
        openForm("New Project");
    })
}