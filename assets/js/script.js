

const myNav = document.getElementById('logo');
const hero = document.getElementById('hero');

top = myNav.offsetTop;
top += 200;

window.onscroll = function (){
    myNav.classList.add('white');
}