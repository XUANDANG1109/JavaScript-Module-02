document.write("Exercise 6<br><br>");

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

var result = rollDice();
const ul = document.createElement("ul");

while (result != 6) {
    result = rollDice();
    ul.innerHTML += `<li>${result}</li>`;
} 
document.body.appendChild(ul);  