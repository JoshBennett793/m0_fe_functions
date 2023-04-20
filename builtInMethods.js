// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

/* 
The includes() method is called on the string "Hello World".
The string "Hello" is passed to the includes() method as an argument.
In this case, includes() is checking if "Hello World" includes the string "Hello", and will
return a boolean that corresponds with whether or not it does.
Since "Hello World" does contain the string "Hello" the return value is true.
*/
"Hello World".includes("Hello");


/* 
The endsWith() method is called on the string "Hello World".
The string "Hello" is passed to the endsWith() method as an argument.
In this case, endsWith() is checking if "Hello World" ends with the string "Hello", and will
return a boolean that corresponds with whether or not it does.
Since "Hello World" does not end with the string "Hello" the return value is false.
*/
"Hello World".endsWith("Hello");

/* 
The endsWith() method is called on the string "Hello World".
The string "rld" is passed to the endsWith() method as an argument.
In this case, endsWith() is checking if "Hello World" ends with the string "rld", and will
return a boolean that corresponds with whether or not it does.
Since "Hello World" does end with the string "rld" the return value is true.
*/
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

/* 
The charAt() method is called on the lastName variable, which stores the string object "Spicoli".
The charAt() method will return a new string with the character located at the index of the string
that pertains to the number passed in as an argument.
In this example, the return value is "S" because the character located at index 0 of "Spicoli" is "S".
The console.log() statement prints the return value of the charAt() method performed on the 
string "Spicoli", logging "S" to the console.
*/
var lastName = "Spicoli";
console.log(lastName.charAt(0));

/* 
The slice() method is called on the movie variable, which stores the string object "Fast Times at Ridgemont High".
The slice() method will return a new string with the characters found inbetween the index positions indicated by the 1st and 2nd number passed in as arguments.
In this example, slice() will start at index 0 and end at the character before index 11, making
the return value "Fast Times" because the "F" is at index 0 and the "S" in "Times" is the character
just before index 11. 
The console.log() statement prints the return value of the slice() method called on the movie string,
logging "Fast Times" to the console.
*/
var movie = "Fast Times at Ridgemont High";
console.log(movie.slice(0, 11));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.