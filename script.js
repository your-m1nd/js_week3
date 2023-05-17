let priceJacket = document.getElementById('priceJacket');
let priceSneakers = document.getElementById('priceSneakers');
let priceJeans = document.getElementById('priceJeans');
let priceBelt = document.getElementById('priceBelt');

console.log(document.getElementById('priceJacket').innerHTML);
console.log(document.getElementById('priceSneakers').innerHTML);
console.log(document.getElementById('priceJeans').innerHTML);
console.log(document.getElementById('priceBelt').innerHTML);

priceJacket = +"9999";
priceSneakers = +"6390";
priceJeans = +"11290";
priceBelt = +"2550";

let total = document.getElementById('total');
total.innerHTML = `${+priceJacket+priceSneakers+priceJeans+priceBelt} руб.`;
console.log(total.innerHTML);


let discount = 20;
let button = document.getElementById('btn');
button.onclick = function newPrice() {
    total.innerHTML = `${+priceJacket+priceSneakers+priceJeans+priceBelt/100*20} руб.`;
    console.log(total.innerHTML);
};

let formElement = document.querySelector('.basket');
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});