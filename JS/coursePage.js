
const activities = [
    { icon: "home", title: "Home", href: "../HTML/index.html" },
    { icon: "dashboard", title: "Dashboard", href: "../HTML/index.html"},
    { icon: "dashboard", title: "Classes", href: "../HTML/index.html" },
    { icon: "result", title: "My Results", href: "../HTML/index.html" },
    { icon: "contact", title: "Contact Us", href: "../HTML/index.html" },
];

let link = "";
activities.forEach(({ icon, title, href }) => {
    link += `
    <a href="${href}" class="a-white sideBarLinks" >
        <div class="activities">
            <img src="../IMAGES/${icon} icon.svg" alt="">
            <p>${title}</p>
        </div>
    </a>`
});

document.querySelector(".sideBar").innerHTML = link;


