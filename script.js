const btnNav = document.getElementById("btn-nav")

const links = document.getElementsByClassName("nav-link")

btnNav.addEventListener("click", () => {
    for(let link of links ){
        link.classList.toggle("hidden-m")
    }
})