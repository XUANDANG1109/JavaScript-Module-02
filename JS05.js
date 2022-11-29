document.write("Exercise 5<br><br>");

let input;
let numbersort = [];

function existence(number, numbersort) {
    for (let i = 0; i < numbersort.length; i++) {
        if (input === numbersort[i])
        return (true);
    }
    return (false);
}

while (true) {
    input = parseInt(prompt("Input number"));
    if (existence(input, numbersort)) {
        alert("The number has already been given and stops its operation");
        break;
    }
    else {
        numbersort.push(input);
    }
}

numbersort.sort((x, y) => x - y);
for (let i = 0; i < numbersort.length; i++) {
    console.log(numbersort[i]);
    document.write("Results in console.<br>");
}

