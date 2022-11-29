document.write("Exercise 9<br><br>");


function even(number) {
    var evennumberoftheray = [];
    for (i in number) {
      if (number[i] % 2 === 0) {
        evennumberoftheray.push(number[i]);
      }
    }
    return evennumberoftheray;
  }

  document.write("Results in console.<br>");
  var originalarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var newarray = even(originalarray);
  console.log(originalarray);
  console.log(newarray);