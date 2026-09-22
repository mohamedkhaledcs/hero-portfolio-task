let eventStyle = document.createElement("style");

eventStyle.textContent = `
    * {
        cursor: none !important;
    }

    .custom-cursor {
        position: fixed;
        width: 26px;
        height: 26px;
        border: 1px solid #ff7100;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: width 0.15s,
                    height 0.15s,
                    border-color 0.15s;
        box-shadow:
            0 0 12px rgba(255,113,0,0.3);
    }

    .cursor-dot {
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ff7100;
        border-radius: 50%;
        pointer-events: none;
        z-index: 100000;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 8px #ff7100;
    }

    .cursor-line {
        position: fixed;
        background: #ff7100;
        pointer-events: none;
        z-index: 99998;
        opacity: 0.8;
    }

    .cursor-horizontal {
        width: 38px;
        height: 1px;
        transform: translate(-50%, -50%);
    }

    .cursor-vertical {
        width: 1px;
        height: 38px;
        transform: translate(-50%, -50%);
    }

    .click-effect {
        position: fixed;
        width: 10px;
        height: 10px;
        border: 2px solid #ff7100;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99997;
        transform: translate(-50%, -50%);
        animation: clickEffect 0.5s ease-out forwards;
    }

    @keyframes clickEffect {

        from {
            opacity: 1;
            width: 10px;
            height: 10px;
        }

        to {
            opacity: 0;
            width: 65px;
            height: 65px;
        }
    }

    .image-clicked {
        animation:
            imageClick 0.45s ease;
    }

    @keyframes imageClick {

        0% {
            transform: scale(1);
        }

        40% {
            transform:
                scale(1.05)
                rotate(-1deg);
        }

        100% {
            transform: scale(1);
        }
    }

    .skill-tag {
        position: absolute;
        padding: 9px 15px;
        border: 1px solid rgba(255,113,0,0.5);
        border-radius: 20px;
        background: rgba(15,15,15,0.9);
        color: white;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
        box-shadow:
            0 0 20px rgba(255,113,0,0.12);
        opacity: 0;
        transform: scale(0.4);
        pointer-events: auto;
        z-index: 20;
        transition: 0.3s;
    }

    .skill-tag.show {
        opacity: 1;
        transform: scale(1);
    }

    .skill-center {
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid #ff7100;
        border-radius: 50%;
        z-index: 19;
        opacity: 0;
        transform: scale(0);
        transition: 0.4s;
    }

    .skill-center.show {
        opacity: 1;
        transform: scale(1);
        box-shadow:
            0 0 25px rgba(255,113,0,0.7);
    }

    .context-menu {
        position: fixed;
        width: 205px;
        padding: 8px;
        background: rgba(15,15,15,0.97);
        border: 1px solid rgba(255,113,0,0.45);
        border-radius: 10px;
        box-shadow:
            0 20px 50px rgba(0,0,0,0.55);
        z-index: 999999;
        backdrop-filter: blur(12px);
        animation: contextShow 0.15s ease;
    }

    .context-title {
        color: #ff7100;
        font-size: 13px;
        font-weight: 600;
        padding: 10px;
        border-bottom: 1px solid #333;
        margin-bottom: 4px;
    }

    .context-item {
        color: #aaa;
        padding: 10px;
        border-radius: 6px;
        font-size: 13px;
        cursor: pointer;
        transition: 0.2s;
    }

    .context-item:hover {
        background: rgba(255,113,0,0.1);
        color: #ff7100;
        padding-left: 15px;
    }

    @keyframes contextShow {

        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

document.head.appendChild(eventStyle);

// Custom Cursor

let cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);

let cursorDot = document.createElement("div");

cursorDot.className = "cursor-dot";

document.body.appendChild(cursorDot);

let horizontalLine = document.createElement("div");

horizontalLine.className =
    "cursor-line cursor-horizontal";

document.body.appendChild(horizontalLine);

let verticalLine = document.createElement("div");

verticalLine.className =
    "cursor-line cursor-vertical";

document.body.appendChild(verticalLine);

// Mouse Move

document.addEventListener("mousemove", function (event) {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";

    cursorDot.style.left =
        event.clientX + "px";

    cursorDot.style.top =
        event.clientY + "px";

    horizontalLine.style.left =
        event.clientX + "px";

    horizontalLine.style.top =
        event.clientY + "px";

    verticalLine.style.left =
        event.clientX + "px";

    verticalLine.style.top =
        event.clientY + "px";
});

// Click Sound

function playClickSound() {

    let audioContext = new (
        window.AudioContext ||
        window.webkitAudioContext
    )();

    let oscillator =
        audioContext.createOscillator();

    let gain =
        audioContext.createGain();

    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(
        650,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        120,
        audioContext.currentTime + 0.08
    );

    gain.gain.setValueAtTime(
        0.07,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.08
    );

    oscillator.connect(gain);

    gain.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.08
    );
}

// Click Effect

function createClickEffect(x, y) {

    let effect = document.createElement("div");

    effect.className = "click-effect";

    effect.style.left = x + "px";
    effect.style.top = y + "px";

    document.body.appendChild(effect);

    setTimeout(function () {
        effect.remove();
    }, 500);
}

// Every Click

document.addEventListener("click", function (event) {

    createClickEffect(
        event.clientX,
        event.clientY
    );

    playClickSound();
});

// Hover Interactive Elements

let interactiveElements =
    document.querySelectorAll(
        "a, button, img"
    );

interactiveElements.forEach(function (element) {

    element.addEventListener(
        "mouseenter",
        function () {

            cursor.style.width = "38px";
            cursor.style.height = "38px";
            cursor.style.borderColor = "#fff";

            cursorDot.style.backgroundColor =
                "#fff";
        }
    );

    element.addEventListener(
        "mouseleave",
        function () {

            cursor.style.width = "26px";
            cursor.style.height = "26px";
            cursor.style.borderColor =
                "#ff7100";

            cursorDot.style.backgroundColor =
                "#ff7100";
        }
    );
});

// Right Click

document.addEventListener(
    "contextmenu",
    function (event) {

        event.preventDefault();

        removeContextMenu();

        let menu =
            document.createElement("div");

        menu.className = "context-menu";

        menu.style.left =
            event.clientX + "px";

        menu.style.top =
            event.clientY + "px";

        let title =
            document.createElement("div");

        title.className = "context-title";

        title.textContent =
            "Mohamed Khaled";

        menu.appendChild(title);

        let menuItems = [
            {
                text: "Reload",
                action: function () {
                    location.reload();
                }
            },
            {
                text: "Home",
                action: function () {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            },
            {
                text: "GitHub",
                action: function () {

                    window.open(
                        "https://github.com/mohamedkhaledcs",
                        "_blank"
                    );
                }
            },
            {
                text: "LinkedIn",
                action: function () {

                    window.open(
                        "https://www.linkedin.com/in/mohamed-khaled-a314792ab/",
                        "_blank"
                    );
                }
            },
            {
                text: "Instagram",
                action: function () {

                    window.open(
                        "https://www.instagram.com/mohamedkhaledcs/",
                        "_blank"
                    );
                }
            },
            {
                text: "Email",
                action: function () {

                    window.location.href =
                        "mailto:mohamed.khaled.career@gmail.com";
                }
            },
            {
                text: "Close",
                action: function () {

                    removeContextMenu();
                }
            }
        ];

        menuItems.forEach(function (item) {

            let menuItem =
                document.createElement("div");

            menuItem.className =
                "context-item";

            menuItem.textContent =
                item.text;

            menuItem.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    item.action();
                }
            );

            menu.appendChild(menuItem);
        });

        document.body.appendChild(menu);

        let menuWidth =
            menu.offsetWidth;

        let menuHeight =
            menu.offsetHeight;

        if (
            event.clientX + menuWidth >
            window.innerWidth
        ) {

            menu.style.left =
                window.innerWidth -
                menuWidth -
                10 +
                "px";
        }

        if (
            event.clientY + menuHeight >
            window.innerHeight
        ) {

            menu.style.top =
                window.innerHeight -
                menuHeight -
                10 +
                "px";
        }
    }
);

// Remove Context Menu

document.addEventListener(
    "click",
    function () {

        removeContextMenu();
    }
);

function removeContextMenu() {

    let oldMenu =
        document.querySelector(
            ".context-menu"
        );

    if (oldMenu) {
        oldMenu.remove();
    }
}

// Image Click

let personImage =
    document.querySelector(
        "img[src='assets/mk.png']"
    );

if (personImage) {

    personImage.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            personImage.classList.remove(
                "image-clicked"
            );

            void personImage.offsetWidth;

            personImage.classList.add(
                "image-clicked"
            );

            createClickEffect(
                event.clientX,
                event.clientY
            );

            playClickSound();

            showSkills();
        }
    );
}

// Skills

let skillsVisible = false;

function showSkills() {

    let imageArea =
        document.querySelector(
            ".image-area"
        );

    if (!imageArea) {
        return;
    }

    let oldSkills =
        imageArea.querySelectorAll(
            ".skill-tag, .skill-center"
        );

    oldSkills.forEach(function (item) {
        item.remove();
    });

    skillsVisible =
        !skillsVisible;

    if (!skillsVisible) {
        return;
    }

    let center =
        document.createElement("div");

    center.className =
        "skill-center";

    center.style.left = "50%";
    center.style.top = "48%";

    imageArea.appendChild(center);

    setTimeout(function () {

        center.classList.add("show");

    }, 50);

    let skills = [
        {
            name: "HTML",
            top: "18%",
            left: "15%",
            link:
                "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            name: "CSS",
            top: "38%",
            left: "2%",
            link:
                "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            name: "JavaScript",
            top: "65%",
            left: "8%",
            link:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            name: "React",
            top: "15%",
            right: "10%",
            link:
                "https://react.dev/"
        },
        {
            name: "Next.js",
            top: "40%",
            right: "0%",
            link:
                "https://nextjs.org/"
        },
        {
            name: "TypeScript",
            top: "67%",
            right: "8%",
            link:
                "https://www.typescriptlang.org/"
        },
        {
            name: "Git & GitHub",
            top: "83%",
            left: "35%",
            link:
                "https://github.com/mohamedkhaledcs"
        }
    ];

    skills.forEach(function (skill, index) {

        let tag =
            document.createElement("div");

        tag.className =
            "skill-tag";

        tag.textContent =
            skill.name;

        tag.style.top =
            skill.top;

        if (skill.left) {
            tag.style.left =
                skill.left;
        }

        if (skill.right) {
            tag.style.right =
                skill.right;
        }

        imageArea.appendChild(tag);

        setTimeout(function () {

            tag.classList.add("show");

        }, 100 + index * 80);

        // Skill Hover

        tag.addEventListener(
            "mouseenter",
            function () {

                tag.style.color =
                    "#ff7100";

                tag.style.borderColor =
                    "#ff7100";

                tag.style.backgroundColor =
                    "rgba(255,113,0,0.1)";

                tag.style.boxShadow =
                    "0 0 25px rgba(255,113,0,0.35)";

                tag.style.transform =
                    "scale(1.08)";

                cursor.style.width =
                    "38px";

                cursor.style.height =
                    "38px";
            }
        );

        tag.addEventListener(
            "mouseleave",
            function () {

                tag.style.color =
                    "white";

                tag.style.borderColor =
                    "rgba(255,113,0,0.5)";

                tag.style.backgroundColor =
                    "rgba(15,15,15,0.9)";

                tag.style.boxShadow =
                    "0 0 20px rgba(255,113,0,0.12)";

                tag.style.transform =
                    "scale(1)";

                cursor.style.width =
                    "26px";

                cursor.style.height =
                    "26px";
            }
        );

        // Skill Click

        tag.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                createClickEffect(
                    event.clientX,
                    event.clientY
                );

                playClickSound();

                window.open(
                    skill.link,
                    "_blank"
                );
            }
        );
    });
}

