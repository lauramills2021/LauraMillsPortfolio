// burger menu

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});


const texts = ['My name is Laura Mills'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    setTimeout(type, 120);
}());

