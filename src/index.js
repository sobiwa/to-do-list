import "./style.css";
import openList from"./open.js";

const mainDisplay = document.querySelector(".main");
const lists = document.querySelectorAll(".cat");


lists.forEach(list => {
    const listTitle = list.textContent;
    list.addEventListener("click", () => {
        console.log(mainDisplay.firstChild);
        mainDisplay.removeChild(mainDisplay.firstChild);
        mainDisplay.appendChild(openList(listTitle));
    })
})

mainDisplay.appendChild(openList("Today"));
