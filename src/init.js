import { openForm } from "./form.js";
import { renderTimeTabs, renderTodayList } from "./dom.js";

const newProject = document.querySelector(".new-project");
let allProjects;

export default function () {

    if (!localStorage.getItem('savedData')) {
        allProjects = {};
    } else {
        allProjects = localStorage.getItem("savedData");
    }

    renderTodayList();
    renderTimeTabs();

    newProject.addEventListener("click", () => {
        openForm("New Project");
    })

}

export { allProjects }