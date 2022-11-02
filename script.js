const eleSquares = document.querySelector('.box');
for (let i = 1; i <= 100; i++) {
    eleSquares.innerHTML += `<div class="sq">${i}</div>`;
}

let square = document.querySelectorAll('.sq');

square.addEventListener('click', 
    function() {
    square.classList.add('selected');
});
