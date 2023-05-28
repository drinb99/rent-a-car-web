let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 400, origin: 'left'})
sr.reveal('.heading',{delay: 400, origin: 'top'})
sr.reveal('.vetura-container .box',{delay: 400, origin: 'top'})
sr.reveal('.sherbimet-container .box',{delay: 400, origin: 'top'})
sr.reveal('.rrethnesh-container .box',{delay: 400, origin: 'top'})
sr.reveal('.rishikimet-container',{delay: 400, origin: 'top'})
sr.reveal('.informohu .box',{delay:  400, origin: 'bottom'})




