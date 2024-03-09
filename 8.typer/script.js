const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];

// Utility function to simulate sleep
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to type out a word
async function type(word) {
    for (const char of word) {
        typedTextSpan.textContent += char;
        await sleep(300); // Typing effect delay
    }
}

// Function to erase a word
async function erase() {
    let content = typedTextSpan.textContent;
    while (content.length > 0) {
        content = content.slice(0, -1); // Remove the last character
        typedTextSpan.textContent = content;
        await sleep(300); // Erasing effect delay
    }
}

// Function to start the typing effect
async function startTyping(words) {
    while (true) {
        // Loop indefinitely
        for (const word of words) {
            await type(word);
            await sleep(1000); // Pause before erasing
            await erase();
            await sleep(1000); // Pause before typing the next word
        }
    }
}

// Implement cursor blinking effect using CSS
function blinkCursor() {
    cursor.classList.add("blink");
}

// Start the typing effect
startTyping(words).catch(console.error);

// Start the cursor blinking effect
blinkCursor();
