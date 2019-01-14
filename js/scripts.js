function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}


function divide(num1, num2) {
	return num1 / num2;
}

var choice;
var number1;
var number2;
$("#calculate").click(function() {
  var choice = prompt("Would you like to\nAdd\nSubtract\nMultiply\nDivide\n?: ");
  var number1 = parseInt(prompt("Enter a number: "));
  var number2 = parseInt(prompt("Enter a second number: "));
  if (choice === "add") {
    document.write(number1 + " plus " + number2 + " is " + add(number1, number2));
  }
  else if (choice === "subtract") {
    document.write(number1 + " minus " + number2 + " is " + subtract(number1, number2));
  }
  else if (choice === "multiply") {
    document.write(number1 + " times " + number2 + " is " + multiply(number1, number2));
  }
  else if (choice === "divide") {
    document.write(number1 + " divided by " + number2 + " is " + divide(number1, number2));
  }
  else {
    alert("That is not a valid choice; goodbye.");
  }
});
choice = "";
number1 = 0;
number2 = 0;
