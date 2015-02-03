
//some globally scoped variables
var number = 10;
var string = "some string";
var second_number = 15; 

//Functions with two parameters. 
//Functions with if/else
//Functions with return
//Functions with global variables 
//Functions with console.log, confirm(), 
//Functions with 
//Tying it all together in an HTML document 

prompt("Please enter a width")

areaBox = function (length, width) {
	return length * width;
}

perimeterBox = function (length, width) {
	return (2 * length) + (2 * width); 
}

volumeBox = function (length, width) {
	return (length * width)^2; 
}

//Declaring a variable with the 'var' keyword declares a variable in the current scope. Using var in a function creates a variable that is scoped
//to that function. Using var at the very top of a document, or anywhere in a document outside of some restricted scope, creates a global
//variable. 

squareIfOverTen = function (number) {
	if (number > 10)
	{
		return number^2;
	}
	else
	{
		return number; 
	}
}


