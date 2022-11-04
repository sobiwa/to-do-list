import { openForm } from "./form.js";
import { renderTimeTabs, renderTodayList } from "./dom.js";

const newProject = document.querySelector(".new-project");

export default function () {
    renderTodayList();
    renderTimeTabs();

    newProject.addEventListener("click", () => {
        openForm("New Project");
    })

}