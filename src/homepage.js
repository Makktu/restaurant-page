export default function homePage() {
    const element = document.createElement("div");

    element.innerHTML = `<div id="main-img"><img id="the-restaurant-image" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></div>`;
    return element;
}
