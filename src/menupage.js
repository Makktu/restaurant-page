export default function menuPage() {
    const element = document.createElement("div");

    element.innerHTML = `    <div id="all-images">
    <div id="image1">
        <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
        />
        <p>
            Grab a pizza the inaction. A slice of this will soothe
            the jangled nerves of a descent into oblivion.
        </p>
    </div>
    <div id="image2">
        <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        />
        <p>
            Strawberries, cream, and sponge. As above, so below.
            What more needs to be said about it?
        </p>
    </div>
    <div id="image3">
        <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
        />
        <p>
            Think you can handle a banana and black olive toasted
            sandwich? This is the dish for you.
        </p>
    </div>
</div>`;
    return element;
}
