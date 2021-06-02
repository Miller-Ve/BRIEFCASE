const menu = document.querySelector(".icon-menu");
const modal = document.querySelector(".navbar-all-mobile");
const close = document.querySelector(".icon-close");


menu.addEventListener("click", () => {
    modal.classList.toggle("modal-navbar");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});

close.addEventListener("click", () => {
    modal.classList.toggle("modal-navbar");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});

const form = document.getElementById('form');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById ('txt');

nombre.addEventListener('input', function(event) {
    if (nombre.validity.valueMissing){
        nombre.setCustomValidity('Requiere nombre');
    } else if(nombre.validity.tooShort){
        nombre.setCustomValidity('El nombre debe tener 5 caracteres');
    } else{
        nombre.setCustomValidity('');
    }
})  
email.addEventListener('input', function(event) {
    if (email.validity.valueMissing){
        email.setCustomValidity('El email debe ser valido');
    } else if(email.validity.tooShort){
        email.setCustomValidity('Email invalido');
    } else{
        email.setCustomValidity('');
    }
})
msg.addEventListener('input', function(event) {
    if (msg.validity.valueMissing){
        msg.setCustomValidity('Debe tener minimo 10 caracteres');
    } else{
        msg.setCustomValidity('');
    }
})



const typed = new Typed('.typed', {
    strings: [
        '<i class="briefcase">BRIEFCASE</i>',
        '<i class="briefcase">FRONTEND <br> DEVELOPER</i>'
    ],
    typeSpeed: 80, 
    startDelay: 400, 
    backSpeed: 75, 
    smartBackspace: true, 
    shuffle: false,
    backDelay: 1800, 
    loop: true, 
    loopCount: false, 
    showCursor: true, 
    cursorChar: '|', 
    contentType: 'html',
});

jQuery(function($){
    $('.slider-testimonio').sss();
  });