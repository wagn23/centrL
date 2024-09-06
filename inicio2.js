let menu = document.querySelector('.menu');
let togglebtn = document.querySelector('.togglebtn');

togglebtn.onclick = function() {
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {

    const audio = document.getElementById('hover-sounds');
    const listItems = document.querySelectorAll('li');

    listItems.forEach(item => {
        item.addEventListener ('mouseover', () =>{
              audio.currentTime = 0;
              audio.play();
        });
    });
});