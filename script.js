function signUp() {
    window.location.href = "signup.html"
}
function logIn() {
    window.location.href = "login.html"
}
function home() {
    window.location.href = "home.html"
}
let screen = document.getElementById('screen');
let upperAI = document.getElementById('bac-AI')
let ai = document.getElementById('AI-msg');
function AI() {
    upperAI.style.background = "rgb(54, 54, 54)"
    screen.style.display = "none"
    ai.style.display = "block"
}
function left() {
    upperAI.style.background = "none"
    screen.style.display = "block"
    ai.style.display = "none"
}