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

if (signMonth.value > 0 && signMonth.value < 10){
    signMonth.value = "0" + signMonth
}
let singupInfo = JSON.parse(localStorage.getItem('saveSignupInfo')) || [];
const signupForm = document.getElementById('signupForm');
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

loginPasswordSpan.style.fontStyle = "italic"
loginPasswordSpan.style.fontWeight = ""
loginEmailspan.style.fontStyle = "italic"
loginEmailspan.style.fontWeight = ""

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
                labelPassword.style.color = "rgb(245, 69, 69)"
                labelEmail.style.color = "rgb(245, 69, 69)"
                loginEmailspan.innerText = "- Login or password is invalid."
                loginPasswordSpan.innerText = "- Login or password is invalid."
            }
        } else {
            labelPassword.style.color = "rgb(245, 69, 69)"
            labelEmail.style.color = "rgb(245, 69, 69)"
            loginPasswordSpan.innerText = "- Login or email is invalid."
            loginEmailspan.innerText = "- Login or email is invalid."
        }
    });
}

function signUp() {
    window.location.href = "signup.html"
}
function logIn() {
    window.location.href = "login.html"
}




