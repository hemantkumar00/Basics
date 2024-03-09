const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");
const form = document.querySelector(".book-form");

btn.addEventListener("click", function (e) {
    //work on CRUD operation of DOM
    e.preventDefault();
    if (valid(title.value, author.value, year.value)) return;
    create(title, author, year);
    // form.reset();
    title.value = "";
    author.value = "";
    year.value = "";
});

// Delete and Update.

bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("section").remove();
    } else if (e.target.classList.contains("edit-btn")) {
        const updateSection = e.target.closest("section").children;
        title.value = updateSection[0].innerHTML;
        author.value = updateSection[1].innerHTML;
        year.value = updateSection[2].innerHTML;
        e.target.closest("section").remove();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function valid(title, author, year) {
    if (title == "" || author == "" || year == "") return true;
    return false;
}

function create(title, author, year) {
    const section = document.createElement("section");
    const divtitle = document.createElement("div");
    divtitle.textContent = title.value;
    const divauthor = document.createElement("div");
    divauthor.textContent = author.value;
    const divyear = document.createElement("div");
    divyear.textContent = year.value;
    const divbutton = document.createElement("div");
    const remove = document.createElement("button");
    const update = document.createElement("button");
    remove.classList.add("delete-btn");
    remove.textContent = "Delete";
    update.classList.add("edit-btn");
    update.textContent = "Edit";
    divbutton.appendChild(remove);
    divbutton.appendChild(update);
    section.append(divtitle);
    section.append(divauthor);
    section.append(divyear);
    section.append(divbutton);
    bookList.append(section);
}
