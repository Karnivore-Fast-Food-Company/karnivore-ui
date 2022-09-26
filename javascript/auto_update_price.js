/// calculate price automatically
let totalPrice = 0;

// intitailising variables
const addFoodQty = document.getElementById('add-food-qty');
const removeFoodQty = document.getElementById('subtract-food-qty');
const foodQty = document.getElementById('food-qty');
const total = document.getElementById('total-price');
const sizes = document.querySelectorAll('.size');
let complementSelected = '';
let size = 'SMALL';

const SIZES = {
    SMALL: 500,
    MEDIUM: 700,
    LARGE: 1000,
};

const COMPLEMENTS = {
    'French fries': 300,
    'Plantain Tape': 500,
};

// update price function
const updatePrice = (size, quantity, complement) => {
    totalPrice = (size + complement) * quantity;
    total.innerHTML = totalPrice.toString();
};

// initialisation
function init() {
    const radios = document.getElementsByTagName('input');
    let value;
    for (let i = 0; i < radios.length; i += 1) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = `label[for=${radios[i].id}]`;
            const label = document.querySelector(value);
            const text = label.innerHTML.trim();
            complementSelected = text;
            updatePrice(SIZES[size], 1, COMPLEMENTS[complementSelected]);
        }
    }
}

// update price when new size is selected
sizes.forEach((element) => element.addEventListener('click', () => {
    size = element.innerText.trim().toUpperCase();
    updatePrice(SIZES[size], parseInt(foodQty.innerText, 10), COMPLEMENTS[complementSelected]);
}));

init();

// hanlde radio button click
const handleClick = () => {
    // radios
    const radios = document.getElementsByTagName('input');
    let value;
    for (let i = 0; i < radios.length; i += 1) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = `label[for=${radios[i].id}]`;
            const label = document.querySelector(value);
            const text = label.innerHTML.trim();
            complementSelected = text;
            updatePrice(SIZES[size], parseInt(foodQty.innerText, 10), COMPLEMENTS[complementSelected]);
        }
    }
};

// adding even listerners to rasio buttons
const radios = document.getElementsByTagName('input');
for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].type === 'radio') {
        radios[i].onclick(() => {
            handleClick();
        });
    }
}

// adding or subtracting food quantity
if (addFoodQty) {
    addFoodQty.addEventListener('click', () => {
        foodQty.innerText = (parseInt(foodQty.innerText, 10) + 1).toString();
        updatePrice(SIZES[size], parseInt(foodQty.innerText, 10), COMPLEMENTS[complementSelected]);
    });
    removeFoodQty.addEventListener('click', () => {
        if (foodQty.innerText !== '1') {
            foodQty.innerText = (parseInt(foodQty.innerText, 10) - 1).toString();
        }
        updatePrice(SIZES[size], parseInt(foodQty.innerText, 10), COMPLEMENTS[complementSelected]);
    });
    updatePrice(SIZES[size], parseInt(foodQty.innerText, 10), COMPLEMENTS[complementSelected]);
}
