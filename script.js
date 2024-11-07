// script.js
function orderCoffee(type) {
    const status = document.getElementById("order-status");
    status.innerText = `Preparing your ${type}... ☕️`;

    setTimeout(() => {
        status.innerText = `Your ${type} is ready! Enjoy! 🎉`;
    }, 2000);
}
