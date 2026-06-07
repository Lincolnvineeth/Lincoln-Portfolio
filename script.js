/*=========================
LOADER
=========================*/

window.addEventListener("load", function () {

const loader = document.getElementById("loader");

setTimeout(function () {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1500);

});


/*=========================
CUSTOM CURSOR
=========================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});


/*=========================
NAVBAR SCROLL
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

if (window.scrollY > 50) {

header.style.background = "rgba(0,0,0,.8)";

header.style.backdropFilter = "blur(20px)";

header.style.boxShadow =
"0px 5px 20px rgba(0,217,255,.2)";

}

else {

header.style.background =
"rgba(255,255,255,.05)";

header.style.boxShadow =
"none";

}

});


/*=========================
SMOOTH ACTIVE LINK
=========================*/

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

link.addEventListener("click", function () {

navLinks.forEach(item => {

item.style.color = "#ffffff";

});

this.style.color = "#00d9ff";

});

});


/*=========================
TYPING EFFECT
=========================*/

const words = [

"AI Enthusiast",

"Python Developer",

"ML Learner",

"Web Developer",

"Problem Solver",

"Future Entrepreneur"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing =
document.getElementById("typing");

function typeEffect() {

const currentWord =
words[wordIndex];

if (!deleting) {

typing.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if (charIndex ==
currentWord.length) {

deleting = true;

setTimeout(
typeEffect,
1500
);

return;

}

}

else {

typing.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if (charIndex == 0) {

deleting = false;

wordIndex++;

if (
wordIndex ==
words.length
) {

wordIndex = 0;

}

}

}

setTimeout(
typeEffect,
deleting ? 60 : 120
);

}

typeEffect();


/*=========================
BUTTON HOVER
=========================*/

const buttons =
document.querySelectorAll(
".btn,.btn2"
);

buttons.forEach(btn => {

btn.addEventListener(
"mouseenter",
function () {

this.style.boxShadow =
"0px 0px 30px #00d9ff";

});

btn.addEventListener(
"mouseleave",
function () {

this.style.boxShadow =
"none";

});

});


/*=========================
SOCIAL ICON EFFECT
=========================*/

const socials =
document.querySelectorAll(
".social a,.footer-social a"
);

socials.forEach(icon => {

icon.addEventListener(
"mouseenter",
function () {

this.style.transform =
"translateY(-8px) scale(1.1)";

});

icon.addEventListener(
"mouseleave",
function () {

this.style.transform =
"translateY(0px) scale(1)";

});

});


/*=========================
CONSOLE MESSAGE
=========================*/

console.log(
"Lincoln Vineeth Portfolio Initialized"
);
/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".glass-card,.project-card,.timeline-box,.stat"
);

function revealOnScroll() {

const windowHeight = window.innerHeight;

revealElements.forEach(element => {

const top =
element.getBoundingClientRect().top;

if(top < windowHeight - 100){

element.style.opacity = "1";

element.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform=
"translateY(80px)";

element.style.transition=".8s";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


/*=========================
HERO IMAGE EFFECT
=========================*/

const heroImage =
document.querySelector(
".hero-image img"
);

document.addEventListener(
"mousemove",
function(e){

let x =
(window.innerWidth/2
-e.clientX)/40;

let y =
(window.innerHeight/2
-e.clientY)/40;

heroImage.style.transform=
`rotateY(${x}deg)
rotateX(${y}deg)
scale(1.03)`;

});

document.addEventListener(
"mouseleave",
function(){

heroImage.style.transform=
"rotateY(0deg) rotateX(0deg) scale(1)";

});


/*=========================
PROJECT CARD EFFECT
=========================*/

const cards=
document.querySelectorAll(
".project-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
function(e){

const rect=
card.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

const rotateX=
(y-rect.height/2)/15;

const rotateY=
(rect.width/2-x)/15;

card.style.transform=
`perspective(1000px)
rotateX(${-rotateX}deg)
rotateY(${-rotateY}deg)
scale(1.03)`;

});

card.addEventListener(
"mouseleave",
function(){

card.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


/*=========================
SKILL EFFECT
=========================*/

const skills=
document.querySelectorAll(
".skills-container span"
);

skills.forEach(skill=>{

skill.addEventListener(
"mouseenter",
function(){

this.style.transform=
"scale(1.15)";

});

skill.addEventListener(
"mouseleave",
function(){

this.style.transform=
"scale(1)";

});

});


/*=========================
COUNTER ANIMATION
=========================*/

const counters=
document.querySelectorAll(
".stat h1"
);

let counterStarted=false;

function startCounter(){

const stats=
document.querySelector(
".stats"
);

const position=
stats.getBoundingClientRect().top;

if(
position<
window.innerHeight-100
&&
!counterStarted
){

counterStarted=true;

counters.forEach(counter=>{

const target=
counter.innerText
.replace("+","");

let count=0;

const speed=
target/50;

function update(){

count+=speed;

if(count<target){

counter.innerText=
Math.ceil(count)+"+";

setTimeout(
update,
30
);

}

else{

if(target==2027){

counter.innerText=
"2027";

}

else{

counter.innerText=
target+"+";

}

}

}

update();

});

}

}

window.addEventListener(
"scroll",
startCounter
);

startCounter();


/*=========================
SECTION HOVER
=========================*/

const sections=
document.querySelectorAll(
"section"
);

sections.forEach(section=>{

section.addEventListener(
"mouseenter",
function(){

this.style.transition=".5s";

});

});


/*=========================
PAGE TITLE EFFECT
=========================*/

const originalTitle=
document.title;

window.addEventListener(
"blur",
function(){

document.title=
"Come Back 🚀";

});

window.addEventListener(
"focus",
function(){

document.title=
originalTitle;

});


/*=========================
RANDOM MOTIVATION
=========================*/

const messages=[

"Keep Building 🚀",

"Dream Big 💡",

"Code Every Day 💻",

"AI Is The Future 🤖",

"Never Stop Learning 📚"

];

console.log(

messages[
Math.floor(
Math.random()*
messages.length
)

]

);
/*=========================
CONTACT FORM
=========================*/

const contactForm =
document.getElementById(
"contactForm"
);

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Thank you for contacting me! 🚀"
);

contactForm.reset();

});

}

/*=========================
SMOOTH SCROLL
=========================*/

document
.querySelectorAll(
'nav a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================
ACTIVE SECTION
=========================*/

const allSections=
document.querySelectorAll(
"section"
);

const allLinks=
document.querySelectorAll(
"nav ul li a"
);

window.addEventListener(
"scroll",
function(){

let current="";

allSections.forEach(section=>{

const top=
section.offsetTop-150;

const height=
section.offsetHeight;

if(
window.scrollY>=top
){

current=
section.getAttribute("id");

}

});

allLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(
link.getAttribute("href")
==
"#"+current
){

link.classList.add(
"active"
);

}

});

});

/*=========================
BACK TO TOP
=========================*/

const topButton=
document.createElement(
"button"
);

topButton.innerHTML="↑";

topButton.style.position=
"fixed";

topButton.style.right=
"20px";

topButton.style.bottom=
"20px";

topButton.style.width=
"50px";

topButton.style.height=
"50px";

topButton.style.border=
"none";

topButton.style.borderRadius=
"50%";

topButton.style.background=
"#00d9ff";

topButton.style.color=
"#000";

topButton.style.fontSize=
"22px";

topButton.style.cursor=
"pointer";

topButton.style.display=
"none";

topButton.style.zIndex=
"999";

document.body.appendChild(
topButton
);

window.addEventListener(
"scroll",
function(){

if(window.scrollY>500){

topButton.style.display=
"block";

}

else{

topButton.style.display=
"none";

}

});

topButton.addEventListener(
"click",
function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================
MENU BUTTON
=========================*/

const menuBtn=
document.querySelector(
".menu-btn"
);

const navMenu=
document.querySelector(
"nav ul"
);

if(menuBtn){

menuBtn.addEventListener(
"click",
function(){

if(
navMenu.style.display==
"flex"
){

navMenu.style.display=
"none";

}

else{

navMenu.style.display=
"flex";

navMenu.style.flexDirection=
"column";

navMenu.style.position=
"absolute";

navMenu.style.top=
"80px";

navMenu.style.right=
"20px";

navMenu.style.padding=
"20px";

navMenu.style.borderRadius=
"15px";

navMenu.style.background=
"rgba(0,0,0,.9)";

}

});

}

/*=========================
SCROLL PROGRESS
=========================*/

const progress=
document.createElement(
"div"
);

progress.style.position=
"fixed";

progress.style.top=
"0";

progress.style.left=
"0";

progress.style.height=
"4px";

progress.style.background=
"#00d9ff";

progress.style.width=
"0%";

progress.style.zIndex=
"9999";

document.body.appendChild(
progress
);

window.addEventListener(
"scroll",
function(){

const scrollTop=
document.documentElement.scrollTop;

const scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const value=
(scrollTop/scrollHeight)*100;

progress.style.width=
value+"%";

});

/*=========================
BUTTON CLICK EFFECT
=========================*/

const allButtons=
document.querySelectorAll(
".btn,.btn2,button"
);

allButtons.forEach(btn=>{

btn.addEventListener(
"click",
function(){

btn.style.transform=
"scale(.95)";

setTimeout(()=>{

btn.style.transform=
"scale(1)";

},150);

});

});

/*=========================
WELCOME MESSAGE
=========================*/

setTimeout(function(){

console.log(

"🚀 Welcome to Lincoln Vineeth's Portfolio"

);

},1000);

/*=========================
YEAR UPDATE
=========================*/

const footerText=
document.querySelector(
"footer p:last-child"
);

if(footerText){

footerText.innerHTML=

"© "+

new Date().getFullYear()+

" Lincoln Vineeth. All Rights Reserved.";

}

/*=========================
PORTFOLIO READY
=========================*/

console.log(
"Portfolio Loaded Successfully ✅"
);
document
.getElementById("contactForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

emailjs.send(

"service_6wyb3az",

"template_sjppq9i",

{

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

message:
document.getElementById("message").value

}

)

.then(function(){

alert(
"🚀 Message Sent Successfully!"
);

document
.getElementById("contactForm")
.reset();

})

.catch(function(error){

console.log(error);

alert(
"❌ Message Failed!"
);

});

});