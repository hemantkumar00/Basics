const cursor = document.querySelector(".cursor");
const pointer = document.querySelector(".pointer");
// an array of 10 colors in hex value
const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

window.addEventListener("mousemove", function (e) {
    e.preventDefault();
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
    cursor.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
});
