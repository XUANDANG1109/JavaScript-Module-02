document.write("Exercise 2 <br><br>");

let number = prompt("The number of participants");
let name_participant;
const ol = document.createElement("ol");
for (let i = 0; i < number; i++) {
    name_participant = prompt(`Participant ${i + 1} name`)
    ol.innerHTML += `<li>${name_participant}</li>`
}
document.body.appendChild(ol);