// vars
const nav = document.querySelector('.nav');
const navHome = document.querySelector('.nav-home');
const navSkills = document.querySelector('.nav-skills');
const navServices = document.querySelector('.nav-services');
const navPortfolio = document.querySelector('.nav-portfolio');
const navBlog = document.querySelector('.nav-blog');
const topNav = document.querySelector('.up-nav');
const downNav = document.querySelector('.down-nav');
const logo = document.querySelector('.logoimg');
const contact = document.querySelector('.contact');
// light/dark mode
const lightmode = document.querySelector('.lightmode-btn');
const switchbtn = document.querySelector('.switchbtn');
const logoline = document.querySelector(".logoline");
const contactBtn = document.querySelector(".contact-btn");
const darktexts = nav.querySelectorAll("h2");
const title = document.querySelectorAll(".title");
const description = document.querySelectorAll(".description");
const nameInput = document.querySelector(".nameInput > input");
const introTitle = document.querySelector(".intro-about .header");
const introText = document.querySelector(".text-intro");


// get placeholder style

// eventListeners
window.addEventListener('load', docLoad);
document.addEventListener('DOMContentLoaded', docReady);
nav.addEventListener('mouseenter', showMenu);
nav.addEventListener('mouseleave', hideMenu);
switchbtn.addEventListener('click', LightDarkMode);
// get hours for light/dark mode

function gettime() {
    var d = new Date();
    var n = d.getHours();
    console.log(n);
    if (n < 6 || n > 18) {
        DM();
    } else {
        LM();
    }
}
// funcs
function docLoad() {
    hideMenu();
}

function docReady() {
    gettime();
    i = 0;
    lightmode.style.background = "url(" + lightmodeBackground + ")";
    setTimeout(typeText, 100, "Hi. I'm", ".hi-im"); //time + speed(250 * text.len)
    setTimeout(showLogo, 2000);
    setTimeout(showMenu, 3000);
    setTimeout(showContact, 4000);
    setTimeout(showIntro, 4500);
    setTimeout(hideMenu, 5500);
}

let i = 0;
let speed = 250;

function typeText(text, html) {
    const inner = document.querySelector(html);
    if (i < text.length) {
        inner.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, speed, text, html);
    }
}

function showLogo() {
    logo.classList.remove('hide');
    i = 0;
    speed = 70;
    // setTimeout(typeText, 100, 'Full stack Developer and Designer.', ".logotxt > p");
    typeText('Full stack Developer and Designer.', ".logotxt > p");

}

function showContact() {
    contact.classList.remove('hide');
}

function showIntro() {
    introTitle.classList.remove('hide');
    introText.classList.add('text-intro-show');
    introText.classList.remove('hide');
}

function showMenu() {
    nav.classList.remove("hide");
    navSkills.classList.remove("hide");
    navServices.classList.remove("hide");
    navPortfolio.classList.remove("hide");
    navBlog.classList.remove("hide");
    navHome.classList.remove("nav-home-trans");
    navHome.children[1].classList.remove("hide");
    topNav.classList.remove("top-nav-show");
    downNav.classList.remove("down-nav-show");
}

function hideMenu() {
    navSkills.classList.add("hide");
    navServices.classList.add("hide");
    navPortfolio.classList.add("hide");
    navBlog.classList.add("hide");
    navHome.classList.add("nav-home-trans");
    topNav.classList.add("top-nav-show");
    downNav.classList.add("down-nav-show");
    navHome.children[1].classList.add("hide");
}

// functions for light/dark mode
function DM() {
    document.body.classList.add("body-dark");
    switchbtn.classList.add("switchbtn-dark");
    contactBtn.classList.add("bgblack");
    switchbtn.innerHTML = '<i class="fas fa-moon"></i>';
    switchbtn.style.background = '#000000';
    lightmode.style.background = "url(" + darkmodeBackground + ")";
    logoline.style.background = "#ffffff";

    for (i = 0; i < darktexts.length; i++) {
        darktexts[i].classList.add('colortext-dark');
    }

    for (i = 0; i < title.length; i++) {
        title[i].classList.add('colortext-dark');
    }

    for (i = 0; i < description.length; i++) {
        description[i].classList.add('colortext-dark');
    }

    darktexts[2].classList.remove("colortext-dark");
}

function LM() {
    document.body.classList.remove("body-dark");
    switchbtn.classList.remove("switchbtn-dark");
    contactBtn.classList.remove("bgblack");
    switchbtn.innerHTML = '<i class="fas fa-sun"></i>';
    switchbtn.style.background = '#F79F79';
    lightmode.style.background = "url(" + lightmodeBackground + ")";
    logoline.style.background = "#F4D35E";

    for (i = 0; i < darktexts.length; i++) {
        darktexts[i].classList.remove('colortext-dark');
    }
    for (j = 0; j < title.length; j++) {
        title[j].classList.remove('colortext-dark');
    }

    for (i = 0; i < description.length; i++) {
        description[i].classList.remove('colortext-dark');
    }

    darktexts[2].classList.remove("colortext-dark");
}


function LightDarkMode() {
    // lightMode
    if (switchbtn.classList.length == 1) {
        DM();
        // darkMode
    } else {
        LM();
    }
}