"use strict";


// === level-1-2 ===
console.log(" === level-1-2 ===")

const name1 ="supercoder:in";


function intro2(outputText) {
    console.log(outputText);
}

intro2("Hi " + name1 + ".");
intro2(" mein Name ist xyz.");

// === level-1-3 ===
console.log(" === level-1-3 ===");

function intro3(name, alter, stadt) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. ich komme aus " + stadt + ".");
}

intro3("SuperCoder", 27, "Duesseldorf");

// === level-1-5 ===
console.log(" === level-1-5 ===");


function math(number1, number2, operator) {
    let multiplication = number1 * number2;
    let division = number1 / number2;

    console.log("Multiplikation von " + number1 + " und " + number2 + " ergibt: " + multiplication);
    console.log("Division von " + number1 + " und " + number2 + " ergibt: " + division);
}

math(2, 10);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

// === level-1-1: forms+js_function-double ===
console.log(" === level-1-1: forms+js_function-double ===");

const inputNumber = document.body.querySelector("#given_number");
const outputNumber = document.body.querySelector(".output_double");

function userInfoSubmit(event) {
    event.preventDefault();

const doubleMe = inputNumber.value;

console.log(doubleMe);


function mathDouble(testNumber) {
    const doubleNumber = testNumber * 2;  
    console.log(doubleNumber);
    outputNumber.textContent = doubleNumber;
}
mathDouble(doubleMe);

}
