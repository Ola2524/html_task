"use strict";

let counter = 30;
const counterElement = document.getElementById("counter");
// initial value of counter element
counterElement.innerText = counter;

const interval = setInterval(() => {
    counter -= 1;
    counterElement.innerText = counter;
    
    if (counter == 0) {
        clearInterval(interval);
    }
}, 1000);
