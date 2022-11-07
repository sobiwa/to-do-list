import { openForm } from "./form.js";
import { createProjects, renderTimeTabs, renderTodayList } from "./dom.js";
import { retrieveStorage } from "./listData.js";

const newProject = document.querySelector(".new-project");

export default function () {

    if (localStorage.length) {
        retrieveStorage();
        createProjects();
    }

    renderTodayList();
    renderTimeTabs();

    newProject.addEventListener("click", () => {
        openForm("New Project");
    })

}
