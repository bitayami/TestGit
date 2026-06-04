const menuIcon = document.getElementById("menu-icon") ; 
const navBar = document.getElementById("nav-bar") ; 

menuIcon.onclick = () =>{
    navBar.classList.toggle("active")
}

