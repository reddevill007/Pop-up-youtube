// ====> pop-up js

const popup = document.querySelector('.popup');
const popClose = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    }, 2000); // 2000 ms = 2 second
}

// Close pop-up
popClose.addEventListener('click', () => {
    popup.style.display = "none"
})