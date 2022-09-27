/// calculate price automatically
let totalPrice = 0;

// intitailising variables
const addFoodQty = document.getElementById('add-food-qty');
const removeFoodQty = document.getElementById('subtract-food-qty');
const foodQty = document.getElementById('food-qty');
const total = document.getElementById('total-price');
const radios = document.querySelectorAll('.size');
let complementSelected = '';
let size = 0;

// update price function
const updatePrice = (size, quantity) => {
    console.log('SIZE: ' + size)
    totalPrice = size * quantity;
    total.innerHTML = totalPrice.toString();
};

// initialisation
function init() {
    const radios = document.querySelectorAll('.size');
    for (let i = 0; i < radios.length; i += 1) {
        if (radios[i].checked) {
            size = parseInt(radios[i].value, 10);
            updatePrice(size, 1);
        }
    }
}

init();

// adding even listerners to radio buttons
for (let i = 0; i < radios.length; i += 1) {
    radios[i].addEventListener('click', () => {
        size = parseInt(radios[i].value);
        updatePrice(size, parseInt(foodQty.innerText, 10));
    });
}

// adding or subtracting food quantity
if (addFoodQty) {
    addFoodQty.addEventListener('click', () => {
        foodQty.innerText = (parseInt(foodQty.innerText, 10) + 1).toString();
        updatePrice(size, parseInt(foodQty.innerText, 10));
    });
    removeFoodQty.addEventListener('click', () => {
        if (foodQty.innerText !== '1') {
            foodQty.innerText = (parseInt(foodQty.innerText, 10) - 1).toString();
        }
        updatePrice(size, parseInt(foodQty.innerText, 10));
    });
    updatePrice(size, parseInt(foodQty.innerText, 10));
}
