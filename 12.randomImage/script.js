const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls
const button = document.querySelector("button");

button.addEventListener("click", () => {
    fetch(baseURL)
        .then((data) => {
            const img = document.createElement("img");
            img.setAttribute("src", data.url);
            img.setAttribute("alt", "image");
            return img;
        })
        .then((data) => {
            const content = document.querySelector(".content");
            if (content.hasChildNodes())
                content.removeChild(content.firstElementChild);
            content.appendChild(data);
        });
});
