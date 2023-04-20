// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting.

function greeting() {
	return "Hello there!";
}

var greeting1 = greeting();
var greeting2 = greeting();

console.log(greeting1);
console.log(greeting2);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
	return `Hi there, ${name}`;
}

var customGreeting1 = customGreeting("Josh");
var customGreeting2 = customGreeting("Jeff Spicoli");

console.log(customGreeting1);
console.log(customGreeting2);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
	var fullName = `${first} ${middle} ${last}`;
	return `Hello, ${fullName}`;
}

var greetJeff = greetPerson("Jeff", "Surfer", "Spicoli");
var greetJosh = greetPerson("Joshua", "Michael", "Bennett");

console.log(greetJeff);
console.log(greetJosh);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
	return num * num;
}

var fiveSquared = square(5);
var tenSquared = square(10);

console.log(`The value of 5 squared is: ${fiveSquared}`);
console.log(`The value of 10 squared is: ${tenSquared}`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"