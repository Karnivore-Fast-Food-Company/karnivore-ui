function handleTextOverflow(length, textClass) {
  document.querySelectorAll(textClass).forEach((element) => {
    const text = element.innerHTML.trim();
    text.length > length
      ? (element.innerHTML = `${text.slice(0, length)}...`)
      : (element.innerHTML = text);
  });
}

handleTextOverflow(13, ".food-card-text1");
handleTextOverflow(15, ".food-card-text");

// Cart page
var addCartQty = document.querySelectorAll(".add-cart-qty");
var removeCartQty = document.querySelectorAll(".subtract-cart-qty");
var cartQty = document.querySelectorAll(".cart-item-qty");

if (addCartQty) {
  addCartQty.forEach(function (element, index) {
    element.addEventListener("click", function () {
      cartQty[index].value++;
    });
  });

  removeCartQty.forEach(function (element, index) {
    element.addEventListener("click", function () {
      if (cartQty[index].value == 1) {
      } else {
        cartQty[index].value--;
      }
    });
  });
}

//add to cart modal
var addFoodQty = document.getElementById("add-food-qty");
var removeFoodQty = document.getElementById("subtract-food-qty");
var foodQty = document.getElementById("food-qty");

if (addFoodQty) {
  addFoodQty.addEventListener("click", () => foodQty.value++);
  removeFoodQty.addEventListener("click", function () {
    if (foodQty.value == 1) {
    } else {
      foodQty.value--;
    }
  });
}
