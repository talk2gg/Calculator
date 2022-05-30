console.log("Welcome to my calculator\n");
console.log("This calculator receive two numbers and an operator and produce result");

//variable declaration and initialization
let ops = prompt("Is it add or subtract or divide or multiply or modulus you intend to calculate:")
let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("Enter second number: "))

//calculator function 
function calculate( num1, num2, ops){
  switch (ops){
		case 'add':
			add = num1 + num2;
			console.log("Answer: "+add);//this displays the results for each operation
			break;
		case 'subtract':
			subtract = num1 - num2;
			console.log("Answer: "+subtract);
			break;
		case 'divide':
			divide = num1 / num2;
			console.log("Answer: "+divide);
			break;
		case 'multiply':
			multiply = num1 * num2;
			console.log("Answer: "+multiply);
			break;
		case 'modulus':
			modulus = num1 % num2;
			console.log("Answer: "+modulus);
			break;

	}
  
}
//calling the function to make calculations
calculate(num1, num2, ops);
console.log("Thank you for using my calculator")