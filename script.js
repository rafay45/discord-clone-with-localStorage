let singEmail = document.getElementById('email');
let signpass = document.getElementById('password');
let signMonth = document.getElementById('month');
let signDate = document.getElementById('date');
let signYear = document.getElementById('year');


let displayName = document.getElementById('display');
let userName = document.getElementById('user-Name');
let disPara = document.getElementById('dis-para');
let userPara = document.getElementById('user-para');

if (userName) {
    userName.addEventListener('focus', function () {
        userPara.style.display = "block"
    });
    userName.addEventListener('blur', function () {
        userPara.style.display = "none"
    });
}

if (displayName) {
    displayName.addEventListener('focus', function () {
        disPara.style.display = "block"
    });
    displayName.addEventListener('blur', function () {
        disPara.style.display = "none"
    });
}

let singupInfo = JSON.parse(localStorage.getItem('saveSignupInfo')) || [];
const signupForm = document.getElementById('signupForm');
let displayUserName = document.getElementById('displayUserName');
if (displayUserName) {
    displayUserName.innerText = singupInfo[1]
}
let userIcon = document.getElementById('userIcon');
if (userIcon) {
    userIcon.innerText = singupInfo[1][0]
}
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        singupInfo.push(
            singEmail.value,
            displayName.value,
            userName.value,
            signpass.value,
            signMonth.value,
            signDate.value,
            signYear.value
        );
        localStorage.setItem('saveSignupInfo', JSON.stringify(singupInfo));
        window.location.href = "home.html";
    });
}

const loginForm = document.getElementById('login');
let loginEmail = document.getElementById('loginEmail');
let loginPass = document.getElementById('loginPass');
let loginEmailspan = document.getElementById('loginEmailspan');
let loginPasswordSpan = document.getElementById('loginPasswordSpan');
let labelEmail = document.getElementById('labelEmail');
let labelPassword = document.getElementById('labelPassword');

let loginInfo = JSON.parse(localStorage.getItem('saveLoginInfo')) || [];
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (loginEmail.value === singupInfo[0]) {
            if (loginPass.value === singupInfo[3]) {
                loginInfo.push(loginEmail.value, loginPass.value)
                localStorage.setItem('saveLoginInfo', JSON.stringify(loginInfo));
                window.location.href = "home.html";
            } else {
                loginPasswordSpan.style.fontStyle = "italic"
                loginPasswordSpan.style.fontWeight = ""
                loginEmailspan.style.fontStyle = "italic"
                loginEmailspan.style.fontWeight = ""
                labelPassword.style.color = "rgb(245, 69, 69)"
                labelEmail.style.color = "rgb(245, 69, 69)"
                loginEmailspan.innerText = "- Login or password is invalid."
                loginPasswordSpan.innerText = "- Login or password is invalid."
            }
        } else {
            loginPasswordSpan.style.fontStyle = "italic"
            loginPasswordSpan.style.fontWeight = ""
            loginEmailspan.style.fontStyle = "italic"
            loginEmailspan.style.fontWeight = ""
            labelPassword.style.color = "rgb(245, 69, 69)"
            labelEmail.style.color = "rgb(245, 69, 69)"
            loginPasswordSpan.innerText = "- Login or email is invalid."
            loginEmailspan.innerText = "- Login or email is invalid."
        }
    });
}
let exit = document.getElementById('exit');
let logout = document.getElementById('out');
if (exit) {
    exit.addEventListener('click', function () {
        logout.style.display = "block"
    })
    document.addEventListener('click', function (e) {
        if (!exit.contains(e.target) && !logout.contains(e.target)) {
            logout.style.display = "none";
        }
    });
}

function signUp() {
    window.location.href = "signup.html"
}
function logIn() {
    window.location.href = "login.html"
}
function loged() {
    window.location.href = "login.html"
}

let screen = document.getElementById('screen');
let upperAI = document.getElementById('bac-AI');
let ai = document.getElementById('AI-msg');

if (screen, upperAI, ai) {
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
}
let msges = document.getElementById('msges');
let chatMsg = document.getElementById('chatMsg');
let msgWords = ["Hey", "How are you?", "I'm pretty good" , "What is HTML", "What is CSS", "What is javaScript"]

if (chatMsg) {
    chatMsg.addEventListener('keypress', (a) => {
        if (a.key === 'Enter' && !a.shiftKey) {
            if (chatMsg.value != "") {
                a.preventDefault()
                if (chatMsg.value == msgWords[0]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    chatMsg.value = ""
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatParaAi"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>Hey ${singupInfo[1]}</span></div>`
                    }, 2000);

                }
               else if (chatMsg.value == msgWords[1]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    chatMsg.value = ""
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatParaAi"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>I'm doing great, thanks for asking! How about you?</span></div>`
                    }, 2000);

                }
               else if (chatMsg.value == msgWords[2]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    chatMsg.value = ""
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatParaAi"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>Nicee! Glad to hear that — pretty good is always a win 😎</span></div>`
                    }, 2000);

                }
               else if (chatMsg.value == msgWords[3]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    chatMsg.value = ""
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatParaAi"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>Nicee! Glad to hear that — pretty good is always a win 😎</span></div>`
                    }, 2000);

                }
            }
        }
    })
}

