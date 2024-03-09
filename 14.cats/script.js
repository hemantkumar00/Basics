const url = "https://api.thecatapi.com/v1/images/search";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const cats = document.createElement("div");
cats.setAttribute("class", "cats");
const random_cats = document.createElement("div");
random_cats.setAttribute("class", "random_cats");
const img = document.createElement("img");
cats.appendChild(random_cats);
random_cats.appendChild(img);

container.appendChild(cats);

btn.addEventListener("click", () => {
    btn.disabled = true;
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            img.setAttribute("src", data[0].url);
            img.setAttribute("alt", "image");
            btn.disabled = false;
        });
});
