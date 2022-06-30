import "./style.css";
import loadPage from "./loading.js";
import topPage from "./topPage.js";

console.log("✅ running");

const topSection = document.getElementById("top-section");
const content = document.getElementById("content");

topSection.appendChild(topPage());
content.appendChild(loadPage());

let currentPage = "Home";

const menuBtns = document.querySelectorAll(".menu");

menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.className.includes("active")) {
            return;
        } else {
            menuBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
        }
        e.target.className += " active";
        currentPage = e.target.id;
        content.innerHTML = "";
        // changePage(currentPage);
    });
});
