let body = document.body;

body.style.margin = "0";
body.style.backgroundColor = "#0d0d0d";
body.style.color = "white";
body.style.fontFamily = "Arial, sans-serif";
body.style.overflowX = "hidden";

let style = document.createElement("style");

style.textContent = `
    ::selection {
        background: #ff7100;
        color: white;
    }

    html {
        scroll-behavior: smooth;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes floatImage {
        0%, 100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 0 25px rgba(255, 113, 0, 0.05);
        }

        50% {
            box-shadow: 0 0 60px rgba(255, 113, 0, 0.2);
        }
    }

    @media (max-width: 950px) {

        .nav {
            padding: 20px 0;
        }

        .nav-links {
            display: none !important;
        }

        .hero {
            flex-direction: column !important;
            text-align: center;
            padding-top: 60px;
        }

        .hero-content {
            width: 100% !important;
        }

        .hero-title {
            font-size: 43px !important;
        }

        .hero-description {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .social {
            justify-content: center;
        }

        .buttons {
            justify-content: center;
        }

        .stats {
            margin: auto;
        }

        .image-area {
            width: 100% !important;
            height: 520px !important;
            margin-top: 40px;
        }
    }

    @media (max-width: 600px) {

        .main {
            padding: 0 20px !important;
        }

        .hero-title {
            font-size: 36px !important;
        }

        .stats {
            width: 100% !important;
            box-sizing: border-box;
            flex-direction: column;
            gap: 15px;
        }

        .stat {
            border-left: none !important;
            border-bottom: 1px solid #333;
            padding: 10px !important;
        }

        .stat:last-child {
            border-bottom: none;
        }

        .image-area {
            height: 450px !important;
        }

        .circle {
            width: 350px !important;
            height: 350px !important;
        }
    }
`;

document.head.appendChild(style);

let main = document.createElement("div");

main.className = "main";

main.style.minHeight = "100vh";
main.style.backgroundImage = "url('assets/bg.png')";
main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
main.style.backgroundRepeat = "no-repeat";
main.style.padding = "0 4%";
main.style.boxSizing = "border-box";
main.style.position = "relative";

body.appendChild(main);

// Navbar

let nav = document.createElement("nav");

nav.className = "nav";

nav.style.height = "85px";
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
nav.style.position = "relative";
nav.style.zIndex = "10";

main.appendChild(nav);

let logo = document.createElement("div");

logo.innerHTML = `
    <span style="color:white;">M</span>
    <span style="color:#ff7100;">K</span>
`;

logo.style.fontSize = "30px";
logo.style.fontWeight = "800";
logo.style.letterSpacing = "1px";
logo.style.cursor = "pointer";
logo.style.transition = "0.3s";

logo.onmouseenter = function () {
    logo.style.transform = "scale(1.08)";
};

logo.onmouseleave = function () {
    logo.style.transform = "scale(1)";
};

nav.appendChild(logo);

// Navigation

let links = document.createElement("div");

links.className = "nav-links";

links.style.display = "flex";
links.style.gap = "42px";
links.style.alignItems = "center";

nav.appendChild(links);

let menuItems = [
    "Home",
    "Services",
    "About me",
    "Portfolio",
    "Contact me"
];

menuItems.forEach(function (item, index) {

    let link = document.createElement("a");

    link.textContent = item;
    link.href = "#";

    link.style.textDecoration = "none";
    link.style.color = index === 0 ? "#ff7100" : "#888";
    link.style.fontSize = "15px";
    link.style.cursor = "pointer";
    link.style.transition = "0.3s";

    link.onmouseenter = function () {
        link.style.color = "#ff7100";
        link.style.transform = "translateY(-2px)";
    };

    link.onmouseleave = function () {

        if (index !== 0) {
            link.style.color = "#888";
        }

        link.style.transform = "translateY(0)";
    };

    links.appendChild(link);
});

// Hire Button

let hireNav = document.createElement("button");

hireNav.textContent = "Hire Me";

hireNav.style.backgroundColor = "#ff7100";
hireNav.style.color = "white";
hireNav.style.border = "none";
hireNav.style.padding = "14px 32px";
hireNav.style.borderRadius = "7px";
hireNav.style.fontWeight = "bold";
hireNav.style.cursor = "pointer";
hireNav.style.transition = "0.3s";
hireNav.style.boxShadow = "0 8px 25px rgba(255,113,0,0.18)";

hireNav.onmouseenter = function () {
    hireNav.style.transform = "translateY(-3px)";
    hireNav.style.boxShadow =
        "0 12px 35px rgba(255,113,0,0.35)";
};

hireNav.onmouseleave = function () {
    hireNav.style.transform = "translateY(0)";
    hireNav.style.boxShadow =
        "0 8px 25px rgba(255,113,0,0.18)";
};

nav.appendChild(hireNav);

// Hero

let hero = document.createElement("section");

hero.className = "hero";

hero.style.minHeight = "calc(100vh - 85px)";
hero.style.display = "flex";
hero.style.alignItems = "center";
hero.style.justifyContent = "space-between";
hero.style.position = "relative";

main.appendChild(hero);

// Content

let content = document.createElement("div");

content.className = "hero-content";

content.style.width = "52%";
content.style.paddingBottom = "40px";
content.style.animation = "fadeUp 0.8s ease forwards";

hero.appendChild(content);

// Intro

let intro = document.createElement("p");

intro.textContent = "Hi I am";

intro.style.color = "#888";
intro.style.fontSize = "18px";
intro.style.margin = "0 0 8px";
intro.style.letterSpacing = "1px";

content.appendChild(intro);

// Name

let name = document.createElement("h2");

name.textContent = "Mohamed Khaled";

name.style.fontSize = "27px";
name.style.margin = "0 0 20px";
name.style.fontWeight = "700";

content.appendChild(name);

// Title

let title = document.createElement("h1");

title.className = "hero-title";

title.textContent = "Frontend Developer";

title.style.fontSize = "50px";
title.style.margin = "0";
title.style.color = "#ff7100";
title.style.lineHeight = "1.1";
title.style.fontWeight = "800";
title.style.letterSpacing = "-1px";

content.appendChild(title);

// Description

let description = document.createElement("p");

description.className = "hero-description";

description.textContent =
    "I build modern, responsive and user-friendly web applications with clean code and creative design.";

description.style.color = "#aaa";
description.style.fontSize = "17px";
description.style.lineHeight = "1.7";
description.style.maxWidth = "570px";
description.style.margin = "25px 0";

content.appendChild(description);

// Social

let social = document.createElement("div");

social.className = "social";

social.style.display = "flex";
social.style.gap = "15px";
social.style.marginBottom = "35px";

content.appendChild(social);

let socialData = [
    {
        link: "https://github.com/mohamedkhaledcs",
        icon: `
            <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.19.69-3.86-1.36-3.86-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
        `
    },
    {
        link: "https://www.linkedin.com/in/mohamed-khaled-a314792ab/",
        icon: `
            <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V9H3.54v11.45ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"/>
            </svg>
        `
    },
    {
        link: "https://www.instagram.com/mohamedkhaledcs/",
        icon: `
            <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1"
                    fill="currentColor"
                    stroke="none"/>
            </svg>
        `
    },
    {
        link: "mailto:mohamed.khaled.career@gmail.com",
        icon: `
            <svg viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
            </svg>
        `
    }
];

socialData.forEach(function (item) {

    let link = document.createElement("a");

    link.href = item.link;
    link.target = "_blank";

    link.innerHTML = item.icon;

    link.style.width = "44px";
    link.style.height = "44px";
    link.style.border = "1px solid #555";
    link.style.borderRadius = "50%";
    link.style.display = "flex";
    link.style.alignItems = "center";
    link.style.justifyContent = "center";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.transition = "0.3s";
    link.style.backgroundColor = "rgba(255,255,255,0.02)";

    link.onmouseenter = function () {

        link.style.color = "#ff7100";
        link.style.borderColor = "#ff7100";
        link.style.transform =
            "translateY(-6px) rotate(5deg)";

        link.style.boxShadow =
            "0 10px 25px rgba(255,113,0,0.25)";
    };

    link.onmouseleave = function () {

        link.style.color = "white";
        link.style.borderColor = "#555";
        link.style.transform =
            "translateY(0) rotate(0)";

        link.style.boxShadow = "none";
    };

    social.appendChild(link);
});

// Buttons

let buttons = document.createElement("div");

buttons.className = "buttons";

buttons.style.display = "flex";
buttons.style.gap = "18px";
buttons.style.marginBottom = "50px";

content.appendChild(buttons);

// Hire Me

let hireBtn = document.createElement("button");

hireBtn.innerHTML = `
    Hire Me
    <span style="margin-left:8px;">→</span>
`;

hireBtn.style.backgroundColor = "#ff7100";
hireBtn.style.color = "white";
hireBtn.style.border = "none";
hireBtn.style.padding = "16px 32px";
hireBtn.style.borderRadius = "6px";
hireBtn.style.fontSize = "15px";
hireBtn.style.fontWeight = "bold";
hireBtn.style.cursor = "pointer";
hireBtn.style.transition = "0.3s";

hireBtn.onmouseenter = function () {

    hireBtn.style.transform = "translateY(-4px)";
    hireBtn.style.boxShadow =
        "0 15px 35px rgba(255,113,0,0.35)";
};

hireBtn.onmouseleave = function () {

    hireBtn.style.transform = "translateY(0)";
    hireBtn.style.boxShadow = "none";
};

buttons.appendChild(hireBtn);

// CV

let cvBtn = document.createElement("button");

cvBtn.innerHTML = `
    <span>↓</span>
    <span>Download CV</span>
`;

cvBtn.style.backgroundColor = "transparent";
cvBtn.style.color = "#aaa";
cvBtn.style.border = "1px solid #777";
cvBtn.style.padding = "16px 30px";
cvBtn.style.borderRadius = "6px";
cvBtn.style.fontSize = "15px";
cvBtn.style.cursor = "pointer";
cvBtn.style.transition = "0.3s";
cvBtn.style.display = "flex";
cvBtn.style.alignItems = "center";
cvBtn.style.gap = "10px";

cvBtn.onmouseenter = function () {

    cvBtn.style.color = "#ff7100";
    cvBtn.style.borderColor = "#ff7100";
    cvBtn.style.transform = "translateY(-4px)";
    cvBtn.style.boxShadow =
        "0 10px 30px rgba(255,113,0,0.18)";
};

cvBtn.onmouseleave = function () {

    cvBtn.style.color = "#aaa";
    cvBtn.style.borderColor = "#777";
    cvBtn.style.transform = "translateY(0)";
    cvBtn.style.boxShadow = "none";
};

buttons.appendChild(cvBtn);

// Stats

let stats = document.createElement("div");

stats.className = "stats";

stats.style.display = "flex";
stats.style.backgroundColor = "rgba(25,25,25,0.8)";
stats.style.width = "fit-content";
stats.style.padding = "20px";
stats.style.borderRadius = "5px";
stats.style.border =
    "1px solid rgba(255,255,255,0.05)";
stats.style.backdropFilter = "blur(10px)";

content.appendChild(stats);

let statsData = [
    ["3+", "Years Learning"],
    ["10+", "Projects Done"],
    ["100%", "Passion for Web Development"]
];

statsData.forEach(function (item, index) {

    let stat = document.createElement("div");

    stat.className = "stat";

    stat.style.padding = "0 30px";
    stat.style.transition = "0.3s";

    if (index !== 0) {
        stat.style.borderLeft = "1px solid #444";
    }

    let number = document.createElement("div");

    number.textContent = item[0];

    number.style.color = "#ff7100";
    number.style.fontSize = "22px";
    number.style.fontWeight = "bold";
    number.style.marginBottom = "8px";

    stat.appendChild(number);

    let text = document.createElement("div");

    text.textContent = item[1];

    text.style.color = "#ddd";
    text.style.fontSize = "13px";

    stat.appendChild(text);

    stats.appendChild(stat);

    stat.onmouseenter = function () {

        stat.style.transform = "translateY(-5px";

        number.style.textShadow =
            "0 0 15px rgba(255,113,0,0.6)";
    };

    stat.onmouseleave = function () {

        stat.style.transform = "translateY(0)";

        number.style.textShadow = "none";
    };
});

// Image Area

let imageArea = document.createElement("div");

imageArea.className = "image-area";

imageArea.style.width = "45%";
imageArea.style.height = "620px";
imageArea.style.display = "flex";
imageArea.style.alignItems = "flex-end";
imageArea.style.justifyContent = "center";
imageArea.style.position = "relative";

hero.appendChild(imageArea);

// Circle behind image

let circle = document.createElement("div");

circle.className = "circle";

circle.style.position = "absolute";
circle.style.width = "500px";
circle.style.height = "500px";
circle.style.borderRadius = "50%";
circle.style.border =
    "1px solid rgba(255,113,0,0.5)";
circle.style.bottom = "20px";
circle.style.animation =
    "pulse 4s ease-in-out infinite";
circle.style.transition = "0.5s";

imageArea.appendChild(circle);

// Person Image

let person = document.createElement("img");

person.src = "assets/mk.png";
person.alt = "Mohamed Khaled";

person.style.position = "relative";
person.style.zIndex = "2";
person.style.width = "100%";
person.style.maxWidth = "560px";
person.style.maxHeight = "620px";
person.style.objectFit = "contain";
person.style.animation =
    "floatImage 4s ease-in-out infinite";
person.style.transition = "0.4s";
person.style.filter =
    "drop-shadow(0 20px 40px rgba(0,0,0,0.5))";

imageArea.appendChild(person);

imageArea.onmouseenter = function () {

    person.style.transform =
        "translateY(-10px) scale(1.025)";

    person.style.filter =
        "drop-shadow(0 25px 50px rgba(255,113,0,0.25))";

    circle.style.transform = "scale(1.04)";
    circle.style.borderColor =
        "rgba(255,113,0,0.8)";
};

imageArea.onmouseleave = function () {

    person.style.transform =
        "translateY(0) scale(1)";

    person.style.filter =
        "drop-shadow(0 20px 40px rgba(0,0,0,0.5))";

    circle.style.transform = "scale(1)";
    circle.style.borderColor =
        "rgba(255,113,0,0.5)";
};

