const menuBtn = document.getElementById('menu-btn')
const hamburger = document.getElementById('menu-btn__burger')
const menu =document.getElementById('nav-list')
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false



const toggleMenue = ()=> {
    if(!showMenu) {
       hamburger.classList.add('open') 
       menu.classList.add('open')

       showMenu = true;
    } else {
        hamburger.classList.remove('open')
        menu.classList.remove('open')

        showMenu= false
    }
}

menuBtn.addEventListener('click', toggleMenue)