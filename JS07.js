document.write("Exercise 7<br><br>");


let result, max;
function rollDice(max) {
    return 1 + Math.floor(Math.random() * max);
}

const ul = document.createElement("ul");

max = prompt("The maximum number of the dice: ");

while (result != max) {
    result = rollDice(max);
    ul.innerHTML += `<li>${result}</li>`;
} 

document.body.appendChild(ul);



