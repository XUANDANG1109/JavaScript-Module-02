document.write("Exercise 8<br><br>");


function concat(str) {
    let strings = "";
    for (i in str) {
      strings += str[i];
    }
    return strings;
  }
  const ul = document.createElement("ul");
  var  checklist = ["Johnny", "DeeDee", "Joey", "Marky"];
  ul.innerHTML = concat(checklist);
  document.body.appendChild(ul);

