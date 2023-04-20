// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
/* 
I properly formatted the askForName function from a one-line 
function to a multi-line function for improved readability.
*/
function askForName() { 
	console.log("Hello, what is your name?")
}

askForName()


// EX 2:
/* 
I properly formatted the indentations of the code block for this function
for improved readbility. The code inside of the code block should be 
indented one time to easily discern where the code block starts and which
function that code belongs to. I moved the closing curly brace to the 
start of the line, or just under the function keyword, to easily discern
where the function ends.
*/
function addThreeNums(first, second, third) {
	var sum = first + second + third;
	return sum;
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
/* 
I corrected the function declaration keyword from 'func' to 'function'.
I also corrected the position of the curly braces to better follow
JavaScript syntactical conventions and improve readability.
*/
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
/* 
I corrected the position of the curly braces and the indentation of the code
in the code block. I did so to better follow JavaScript syntactical conventions
and improve readability. Code inside of a code block should be indented in
accordance to what part of the code it belongs to. 
*/
function average(num1, num2) {
	var sum = num1 + num2;
  var avg = sum / 2;
	return avg;
}