const eleSquares = document.querySelector('.box');
for (let i = 1; i <= 100; i++) {
    eleSquares.innerHTML += `<div id="sq" class="sq">${i}</div>`;
}

let square = document.getElementById("sq");

square.addEventListener('click', 
    function() {
    square.classList.add('selected');
});
