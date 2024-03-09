// generate a random color.

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const body = document.querySelector("body");

let colors = null;

document.querySelector("#start").addEventListener("click", () => {
    if (colors === null)
        colors = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(colors);
    colors = null;
});
