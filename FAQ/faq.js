function menuToggle(){
    let hamburger = document.getElementById("hamburger");
    let hamburgerClose = document.getElementById("hamburger-close");
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
    if(hamburger.style.display !== "none"){
        hamburger.style.display = "none";
        hamburgerClose.style.display = "initial";
    }else{
        hamburger.style.display = "initial";
        hamburgerClose.style.display = "none";
    }
}


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
