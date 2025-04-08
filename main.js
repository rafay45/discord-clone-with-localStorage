let logout = document.getElementById('out');
let exit = document.getElementById('exit');
exit.addEventListener('click', function(){
    logout.style.display = "block"
})
document.addEventListener('click', function (e) {
    if (!exit.contains(e.target) && !logout.contains(e.target)) {
        logout.style.display = "none";
    }
});
function loged() {
    window.location.href = "login.html"
}
let screen = document.getElementById('screen');
let upperAI = document.getElementById('bac-AI');
let ai = document.getElementById('AI-msg');

function AI() {
    upperAI.style.backgroundColor = "rgb(54, 54, 54)"
    screen.style.display = "none"
    ai.style.display = "block"
}
function left() {
    upperAI.style.backgroundColor = ""
    screen.style.display = "block"
    ai.style.display = "none"
}