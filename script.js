function signUp() {
    window.location.href = "signup.html"
}
function logIn() {
    window.location.href = "login.html"
}
let screen = document.getElementById('screen');
let upperAI = document.getElementById('bac-AI');
let ai = document.getElementById('AI-msg');
let displayName = document.getElementById('display');
let userName = document.getElementById('userName');
let disPara = document.getElementById('dis-para');
let userPara = document.getElementById('user-para');
userName.addEventListener('focus', function () {
    userPara.style.display = "block"
})
userName.addEventListener('blur', function () {
    userPara.style.display = "none"
})
displayName.addEventListener('focus', function () {
    disPara.style.display = "block"
})
displayName.addEventListener('blur', function () {
    disPara.style.display = "none"
})


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

let singEmail = document.getElementById('email');
let signpass = document.getElementById('password');
let signMonth = document.getElementById('month');
let signDate = document.getElementById('date');
let signYear = document.getElementById('year');


let singupInfo = JSON.parse(localStorage.getItem('saveSignupInfo')) || [];
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    singupInfo.push(singEmail.value, displayName.value, userName.value, signpass.value, signMonth.value, signDate.value, signYear.value)
    localStorage.setItem('saveSignupInfo', JSON.stringify(singupInfo));
    window.location.href = "home.html";
})

let loginEmail = document.getElementById('loginEmail');
let loginPass = document.getElementById('loginPass');

let loginInfo = JSON.parse(localStorage.getItem('saveLoginInfo')) || [];

let loginEmailspan = document.getElementById('loginEmailspan');
let loginPasswordSpan = document.getElementById('loginPasswordSpan');
const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', function () {
    e.preventDefault();
    loginInfo.push(loginEmail.value, loginPass.value)
    localStorage.setItem('saveLoginInfo', JSON.stringify(loginInfo));
    window.location.href = "home.html";
})




