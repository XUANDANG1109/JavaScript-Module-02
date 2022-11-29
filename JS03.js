document.write("Exercise 3<br><br>");

let nameofdog = [];

const ul = document.createElement("ul");

for (let i = 1; i < 7; i++) {
    nameofdog.push(prompt("Name of Dog "+ i +" :"));
}
nameofdog.reverse();

for (let i = 0; i < 6; i++) {
    ul.innerHTML += `<li>${nameofdog[i]}</li>`;
}

document.body.appendChild(ul);