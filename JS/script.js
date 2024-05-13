const mottos = [
    { icon: "vision", title: "Vision" },
    { icon: "mission", title: "Mission" },
    { icon: "value", title: "Vision" },
];

let motto = "";
mottos.forEach(({ icon, title, message }) => {
    message ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisi ipsum.";
    motto += `
        <div class="mottos">
            <img src="../IMAGES/${icon} icon.svg" alt="">
            <div>
                <h2>${title}</h2>
                <span>${message}</span>
            </div>
        </div>`;
});

document.querySelector(".mottosParent").innerHTML = motto;


