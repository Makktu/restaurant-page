export default function topPage() {
    const element = document.createElement("div");

    element.innerHTML = `<h1>Restaurant 1996</h1>
    <h3 id="tagline">
        the place where it always 1996...
    </h3>
    <ul id="nav-bar">
                <li id="home" class="menu active">Home</li>
                <li id="menu" class="menu">Menu</li>
                <li id="contact" class="menu">Contact</li>
            </ul>
            </div>`;
    return element;
}
