// Hamburger Menu 
let menuButton = document.getElementById("hamburger-button")
let navList = document.querySelector("nav ul")
menuButton.addEventListener('click',() => {
    menuButton.classList.toggle("open")
    navList.classList.toggle("open")
})