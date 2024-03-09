const btn = document.querySelector("#emoji");
const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "👀",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
];
btn.addEventListener("mouseover", function () {
    btn.textContent = emojis[Math.floor(Math.random() * emojis.length)];
});
