// Global variable
let globalMessage = "Hello from Global scope."

/**
 * @param {string} -user's name
 * @param {number} -How many times to repeat
 * @return {string} -Formatted text message
 */

function createMessage(name, times) {
    let localMessage = `Hello, ${name}, WELCOME!! `;
    return localMessage.repeat(times);
}

const Box = document.getElementById("box")
const animateBtn = document.getElementById("animateBox");
const msgBtn = document.getElementById("msgBtn");
const messagePara = document.getElementById("message");

function animatebox() {
    Box.classList.add("animate")
    setTimeout(() => {
    Box.classList.remove("animate");
}, 2000);
}

animateBtn.addEventListener("click", animatebox);

function showMessage() {
    let customMessage = createMessage('Student', 1);
    messagePara.textContent = customMessage + "||" + globalMessage;
}

msgBtn.addEventListener("click", showMessage);