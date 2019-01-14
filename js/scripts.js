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

var choice = parseInt(prompt("Would you like to\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n?: "));

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter a second number: "));

if (choice === 1) {
  alert(number1 + " plus " + number2 + " is " + add(number1, number2));
}
else if (choice === 2) {
  alert(number1 + " minus " + number2 + " is " + subtract(number1, number2));
}
else if (choice === 3) {
  alert(number1 + " times " + number2 + " is " + ultiply(number1, number2));
}
else if (choice === 4) {
  alert(number1 + " divided by " + number2 + " is " + divide(number1, number2));
}
else {
  alert("That is not a valid choice; goodbye.");
}
