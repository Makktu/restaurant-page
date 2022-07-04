import "./style.css";
import loadPage from "./loading.js";
import topPage from "./topPage.js";
import menuPage from "./menupage.js";
import contactPage from "./contactpage.js";
import homePage from "./homepage.js";
console.log("✅ running");

const topSection = document.getElementById("top-section");
const content = document.getElementById("content");

topSection.appendChild(topPage());
content.appendChild(homePage());

let currentPage = "home";

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
        changePage(currentPage);
    });
});

function changePage(currentPage) {
    if (currentPage == "menu") {
        content.appendChild(menuPage());
    }
    if (currentPage == "contact") {
        content.appendChild(contactPage());
    }
    if (currentPage == "home") {
        content.appendChild(homePage());
    }
}
