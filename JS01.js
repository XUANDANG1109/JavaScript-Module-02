document.write("Exercise 1 <br><br>");

let number1 = prompt("Input number 1:")
let number2 = prompt("Input number 2:")
let number3 = prompt("Input number 3:")
let number4 = prompt("Input number 4:")
let number5 = prompt("Input number 5:")

const numbers = [number1, number2, number3, number4, number5];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
    document.write("Results in console.<br>");
}
