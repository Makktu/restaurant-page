export default function topPage() {
    const element = document.createElement("div");

    element.innerHTML = `<h1>The End Of The World Restaurant</h1>
    <h3 id="tagline">
        the ultimate eatery for your personal apocalypse!
    </h3>
    <ul id="nav-bar">
                <li id="home" class="menu active">Home</li>
                <li id="menu" class="menu">Menu</li>
                <li id="contact" class="menu">Contact</li>
            </ul>
            </div>`;
    return element;
}
