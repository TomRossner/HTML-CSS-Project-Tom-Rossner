
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("x");
    navLinks.classList.toggle("open");
})

const chevron = document.querySelectorAll('.bi.bi-chevron-down');
const cards = document.querySelectorAll('.cards');
// console.log(cards);
// console.log(chevron);


chevron.forEach((arrow) =>{
    arrow.addEventListener('click', () => {    
        arrow.classList.toggle('rotate');
        arrow.parentElement.parentElement.classList.toggle('expand');
        arrow.parentElement.parentElement.classList.toggle('border-yellow');
    })
})
