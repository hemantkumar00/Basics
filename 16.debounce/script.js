// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

let url = "https://randomuser.me/api/?seed=";
const input = document.querySelector("#user-input");
const card = document.querySelector("#user-card");

const debounce = (func, delay) => {
    let debouncetimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debouncetimer);
        debouncetimer = setTimeout(() => func(), delay);
    };
};

input.addEventListener(
    "input",
    debounce(function (e) {
        url = `https://randomuser.me/api/?seed=${input.value}`;
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                let seedvalue = data.info.seed;
                return { data: data.results[0], seed: seedvalue };
            })
            .then(({ data, seed }) => {
                let name = `${data.name.title}. ${data.name.first} ${data.name.last}`;
                let email = data.email;
                let img = data.picture.large;
                const image = document.createElement("img");
                image.setAttribute("src", img);
                image.setAttribute("alt", "image");
                const h2 = document.createElement("h2");
                h2.textContent = name;
                const p1 = document.createElement("p");
                p1.textContent = email;
                const p2 = document.createElement("p");
                if (card.children.length !== 0) {
                    card.children[0].remove();
                    card.children[0].remove();
                    card.children[0].remove();
                    card.children[0].remove();
                }
                card.style.display = "block";
                p2.textContent = `seed: ${seed}`;
                card.appendChild(image);
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
            })
            // .then((data) => console.log(data))
            .catch((e) => console.log(e));
    }, 1000),
);
