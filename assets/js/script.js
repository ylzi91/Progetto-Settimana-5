

const myNav = document.getElementById('myNav');
const hero = document.getElementById('hero');

top = myNav.offsetTop;

window.addEventListener('scroll', function(){
      if (this.window.scrollY > 400){
        myNav.style.backgroundColor = 'white';
        document.getElementsByTagName('button')[0].style.backgroundColor = 'green';
      }
    else {
        myNav.style.backgroundColor = '';
        document.getElementsByTagName('button')[0].style.backgroundColor = '';
    }
});