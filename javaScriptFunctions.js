//function with if statements. declare a function 



addThree = function (numberOne, numberTwo, numberThree) {
	return numberOne + numberTwo + numberThree; 
	console.log(numberTwo + numberTwo + numberThree); 
}

square = function (number) {
	return number^2; 
	console.log(number^2); 
}

cube = function (number) {
	return number^3;
	console.log(number^3);
}

addYippee = function (someString) {
	return someString + " yiiipppppeee!";
	console.log(someString + " yippeeeddooodaa");
}

addThenSquare = function (numberOne, numberTwo) {
	return (numberOne + numberTwo)^2 
	console.log((numberOne + numberTwo)^2);
}

addThenCube = function (firstNumber, secondNumber) {
	return (firstNumber + secondNumber)^3;
	console.log((firstNumber + secondNumber)^3);
}

tripleAddThenCube = function (firstNumber, secondNumber, thirdNumber) {
	return (firstNumber + secondNumber + thirdNumber)^3;
	console.log((firstNumber + secondNumber + thirdNumber)^3); 
}

//write an if statement a function as a condition 

if (addThenCube(3, 2) < 100) 
{
	console.log("Looks like the numbers have got to get big before you can add and square them and have the result be greater than a hundred!");
}
else 
{
	console.log("For this particular iteration, it looks like we made it past the big one hundo!");
}