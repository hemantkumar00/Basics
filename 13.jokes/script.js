const url = "https://api.chucknorris.io/jokes/random";

// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition
const button = document.querySelector("#getJoke");
const text = document.querySelector("#display-joke");

// XMLHttpRequest way.

// button.addEventListener("click", () => {
//     button.disabled = true;
//     button.style.backgroundColor = "gray";
//     XMLReaquest(url, (e) => {
//         // console.log(e.value);
//         text.textContent = e.value;
//         button.style.backgroundColor = "";
//         button.disabled = false;
//     });
// });

// function XMLReaquest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true); // true for asynchronous.
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             callback(JSON.parse(xhr.responseText));
//         }
//     };
//     xhr.send();
// }

// Promise way now.

function promiseAPI(url) {
    button.disabled = true;
    button.style.backgroundColor = "gray";
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}

button.addEventListener("click", () => {
    promiseAPI(url)
        .then((data) => {
            button.disabled = false;
            button.style.backgroundColor = "";
            text.textContent = data.value;
        })
        .catch((error) => console.log(error));
});
