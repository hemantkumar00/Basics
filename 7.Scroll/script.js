document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function () {
        myFunction();
    };
});

function myFunction() {
    var winScroll = window.scrollY || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".progress").style.width = scrolled + "%";
}
