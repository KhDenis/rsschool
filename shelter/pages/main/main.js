const popupLayout = document.getElementById("shadow")
const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger-menu-off")
const body = document.body

window.onload = function () {
    console.log()
    addBurgerHandler()
}

const addBurgerHandler = () =>{
    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains("slide-away-tag") == true){
            toggleBurgerMenu()
        }
    })
}

const toggleBurgerMenu = () => {
    popupLayout.classList.toggle("toggle-menu")
    burgerMenu.classList.toggle("burger-menu-on")
    body.classList.toggle("no-scrolling")
    burger.classList.toggle("burger-fixed")
    
}

