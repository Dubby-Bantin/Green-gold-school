import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'


let page = "";

let links = [
    { link: "Academics", href: "../HTML/coursePage.html" },
    { link: "About Us", href: "#" },
    { link: "Admissions", href: "#" },
    ];

    links.forEach(
    ({ link, href }) => (page += `<li><a href="${href}">${link}</a></li>`)
    );

    document.querySelectorAll(".navList .navLink").forEach((navLink) => {
    navLink.innerHTML = page;
    });

    document
    .querySelectorAll(".navBar .logo img:nth-child(2)")
    .forEach((menuBar) => {
        menuBar.addEventListener("click", () => {
        document.querySelector(".navList ul").classList.add("toggled");
        });
    });


    document.querySelectorAll("form").forEach((form) => { 
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        });
    });


const day = dayjs();
const today = day.format('dddd, DD MMMM YYYY') 
document.querySelectorAll(".date").forEach((date) => {
    date.innerHTML = today
})


