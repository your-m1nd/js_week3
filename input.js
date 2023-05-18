let input1 = document.getElementById('input1');
input1.addEventListener('keydown', function (event) {
    console.log(event);
});

let input2 = document.getElementById('input2');
let result = document.getElementById('input1').value;
let button = document.getElementById('btn');
    button.onclick = function count() {
    input2.value = `${input1.value**2}`;
    };

let formElement = document.querySelector('.form');
formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});