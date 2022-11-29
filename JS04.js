document.write("Exercise 4<br><br>");

let list = [];
let input;

while (input != 0) {
    input = parseInt(prompt("The number is: "));
    list.push(input);
}

list.sort((x, y) => y - x);
console.log("Numbers from largest to smallest");

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    document.write("Results in console.<br>");
}




