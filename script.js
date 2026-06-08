document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});

const logo = document.querySelector(".logo");

let glow = true;

setInterval(() => {
    if(glow){
        logo.style.filter = "drop-shadow(0 0 25px #60a5fa)";
    }else{
        logo.style.filter = "drop-shadow(0 0 5px #60a5fa)";
    }
    glow = !glow;
}, 1000);

});
