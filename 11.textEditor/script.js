// let output = document.querySelector("#output-field");

// const buttons = document.querySelectorAll(".btns-container .btn");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         output.style.textDecoration = "none";
//         let value = document.querySelector("#input-field").value;
//         console.log(value == "");
//         if (e.target.classList.contains("uppercase")) {
//             output.textContent = value.toString().toUpperCase();
//         } else if (e.target.classList.contains("lowercase")) {
//             output.textContent = value.toString().toLowerCase();
//         } else if (e.target.classList.contains("capitalize")) {
//             output.innerHTML =
//                 value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
//         } else if (e.target.classList.contains("bold")) {
//             output.innerHTML = value.toString().bold();
//         } else if (e.target.classList.contains("italic")) {
//             output.innerHTML = value.toString().italics();
//         } else if (e.target.classList.contains("underline") && value != "") {
//             output.textContent = value.toString();
//             output.style.textDecoration = "underline";
//         } else {
//             output.textContent = value.toString();
//         }
//         if (value == "") output.textContent = "Output";
//         document.querySelector("#input-field").value = "";
//     });
// });

const output = document.querySelector("#output-field");
const inputField = document.querySelector("#input-field");
const buttons = document.querySelectorAll(".btns-container .btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = inputField.value.trim();
        let transformedValue = value; // Default to original value

        if (value) {
            switch (true) {
                case e.target.classList.contains("uppercase"):
                    transformedValue = value.toUpperCase();
                    break;
                case e.target.classList.contains("lowercase"):
                    transformedValue = value.toLowerCase();
                    break;
                case e.target.classList.contains("capitalize"):
                    transformedValue =
                        value.charAt(0).toUpperCase() +
                        value.slice(1).toLowerCase();
                    break;
                case e.target.classList.contains("bold"):
                    output.innerHTML = value.bold(); // HTML required for styling
                    break;
                case e.target.classList.contains("italic"):
                    output.innerHTML = value.italics(); // HTML required for styling
                    break;
                case e.target.classList.contains("underline"):
                    output.style.textDecoration = "underline";
                    break;
            }
        } else {
            transformedValue = "Output"; // Default text if input is empty
        }

        // Apply the transformed value if not already set by HTML methods
        if (!["bold", "italic"].includes(e.target.className)) {
            output.textContent = transformedValue;
        }

        // Reset input field and text decoration
        inputField.value = "";
        if (!e.target.classList.contains("underline")) {
            output.style.textDecoration = "none";
        }
    });
});
