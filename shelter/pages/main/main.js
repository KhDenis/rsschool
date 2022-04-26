const popupLayout = document.getElementById("shadow")
const burger = document.querySelector(".burger-container")

    
function clickFunction(e) {
        popupLayout.classList.toggle("toggle-menu")

    }
burger.addEventListener("click", clickFunction)
document.addEventListener("click", (e)=>{
    alert((e.target.classList))
})