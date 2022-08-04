// function menuToggle(){
//     let hamburger = document.getElementById("hamburger");
//     let hamburgerClose = document.getElementById("hamburger-close");
//     const navLinks = document.getElementById("navLinks");
//     navLinks.classList.toggle("open");
//     if(hamburger.style.display !== "none"){
//         hamburger.style.display = "none";
//         hamburgerClose.style.display = "initial";
//     }else{
//         hamburger.style.display = "initial";
//         hamburgerClose.style.display = "none";
//     }
// }

const menu = document.querySelector(".menu");
const navLinks = document.getElementById("navLinks");


menu.addEventListener("click", () => {
    menu.classList.toggle("x");
    navLinks.classList.toggle("open");
})

    const chevron = document.querySelectorAll('.bi.bi-chevron-right');
    const cards = document.querySelectorAll('.cards');
    console.log(cards);
    console.log(chevron);


    chevron.forEach((arrow) =>{
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('rotate');
            arrow.parentElement.parentElement.classList.toggle('expand');
            arrow.parentElement.parentElement.classList.toggle('no-justify');
        })
    })
