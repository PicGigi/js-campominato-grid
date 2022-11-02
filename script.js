const eleSquares = document.querySelector('.box');
for (let i = 1; i <= 100; i++) {
    eleSquares.innerHTML += `<div class="sq">${i}</div>`;
}

let square = document.querySelectorAll('.sq');

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', 
    function() {
    square[i].classList.toggle('selected');

    });
}
