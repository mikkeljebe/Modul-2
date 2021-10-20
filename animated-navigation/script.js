const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav)=>{
  nav.addEventListener('click', toggleNav);
});

AOS.init({
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

function toggleNav(){
  // toggle Menu bars open/closed
  menuBars.classList.toggle('change');
  // Toggle: menu active 
  overlay.classList.toggle('overlay-active');
  if(overlay.classList.contains('overlay-active')){
    // Animate in - overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
    // Animate in - nav items
    navAnimation('out', 'in');
  } else {
    // Animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    // Animate out - nav items
    navAnimation('in', 'out');
  }
}

// Control Navigation Animation 
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) =>{
    nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
  })
}
