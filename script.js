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
let token = JSON.parse(localStorage.getItem('addtoken')) || [];
const signupForm = document.getElementById('signupForm');
let displayUserName = document.getElementById('displayUserName');
let emailSpan = document.getElementById('emailSpan');

function signUp() {
    window.location.href = "signup.html";
}
function logIn() {
    window.location.href = "login.html";
}
function loged() {
    window.location.href = "login.html";
    localStorage.removeItem('addtoken')
}
if (displayUserName) {
    displayUserName.innerText = singupInfo[1]
}
let userIcon = document.getElementById('userIcon');
if (userIcon) {
    userIcon.innerText = singupInfo[1][0]
}
let pageone = document.getElementById("pageone")
let alert = document.getElementById("alertBox")
console.log(pageone);
if (localStorage.getItem('addtoken')) {
    pageone.style.display = "block"
    alert.style.display = "none"
}
let tokenAdded = "add"
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (singEmail.value != singupInfo[0]) {
            if (displayName.value[0] === displayName.value[0].toUpperCase()) {
                displayName.style.border = ""
                if (userName.value.includes('786') || userName.value.includes('98001') || userName.value.includes('7865234')) {
                    userName.style.border = ""
                    singupInfo.push(
                        singEmail.value,
                        displayName.value,
                        userName.value,
                        signpass.value,
                        signMonth.value,
                        signDate.value,
                        signYear.value,
                    );
                    token.push(
                        tokenAdded
                    )
                    localStorage.setItem('saveSignupInfo', JSON.stringify(singupInfo));
                    localStorage.setItem('addtoken', JSON.stringify(token));
                    window.location.href = "home.html"

                } else {
                    userName.style.border = "1px solid rgb(245, 69, 69)"
                    userPara.innerHTML = `<i><b>Available</b>: ${userName.value}786 , ${userName.value}98001 , ${userName.value}7865234</i>`
                }
            } else {
                displayName.style.border = "1px solid rgb(245, 69, 69)"
            }
        } else {
            emailSpan.style.fontStyle = "italic"
            emailSpan.innerText = "- Email already exites"
        }
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
                loginInfo.push(
                    loginEmail.value,
                    loginPass.value,
                )
                token.push(
                    tokenAdded
                )
                localStorage.setItem('saveLoginInfo', JSON.stringify(loginInfo));
                localStorage.setItem('addtoken', JSON.stringify(token));
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
let chatPara = document.getElementById('chatPara');
let typing = document.getElementById('typing')

let msgWords = ["Hey", "How are you?", "I'm pretty good", "Yea btw What is HTML?", "What is CSS?", "What is javaScript?", "Okay! Thank you"]
let msgAns = [`Hey`, `I'm doing great, thanks for asking! How about you?`, `Nicee! Glad to hear that — pretty good is always a win 😎`, `HTML (Hypertext Markup Language) is a standard markup language used to define <br> the structure of web pages and web applications. It uses tags and elements to <br> structure content like text, images, links, and forms, which are displayed in a <br> web browser. <br> 

In simple terms, HTML creates the skeleton of a webpage, including text, headings, <br> images, links, and buttons, to present content to users in a browser.` , `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation <br> and design of a web page written in HTML. It controls how the elements on a web page <br> should look — including their colors, fonts, spacing, layout, and responsiveness.`, `JavaScript is a high-level programming language used to create interactive, dynamic, <br> and functional web pages. It allows developers to add features like form validation, <br> animations, events, and real-time updates to a website. <br>
<b>In simple words</b>: JavaScript brings life and interactivity to static web pages.` , `You're very welcome! 😊 <br>
If you ever need help with HTML, CSS, JavaScript — or anything else — just hit me up anytime. <br>
Happy coding, ${singupInfo[1]}!
`]
if (chatMsg) {
    chatMsg.addEventListener('keypress', (a) => {
        if (a.key === 'Enter' && !a.shiftKey) {
            if (chatMsg.value != "") {
                a.preventDefault()
                if (chatMsg.value == msgWords[0]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[0]} ${singupInfo[1]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 2000);
                }
                else if (chatMsg.value == msgWords[1]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[1]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 3000);

                }
                else if (chatMsg.value == msgWords[2]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[2]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 3000);
                }
                else if (chatMsg.value == msgWords[3]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[3]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 4000);
                }
                else if (chatMsg.value == msgWords[4]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[4]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 4000);
                }
                else if (chatMsg.value == msgWords[5]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[5]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 4000);
                }
                else if (chatMsg.value == msgWords[6]) {
                    msges.innerHTML += `<div id="chatPara"><div class="aiBox"><span id="userIcon">${singupInfo[1][0]}</span></div><span>${chatMsg.value}</span></div>`
                    msges.scrollTop = msges.scrollHeight;
                    chatMsg.value = ""
                    typing.style.display = "flex";
                    setTimeout(() => {
                        msges.innerHTML += `<div id="chatPara"><div class="box-1"><img src="assets/ai-image.jpg" alt=""></div><span>${msgAns[6]}</span></div>`
                        msges.scrollTop = msges.scrollHeight;
                        typing.style.display = "none";
                    }, 4000);
                }
            }
        }
    })
}


