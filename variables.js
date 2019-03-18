/*Var used to the only way to declare a variable in JavaScript. It offers many possibilities. However, developer have found out that it does not allow them to perform effectively some task which require more strictness. For example, a variable declared with var can be accessed as global variable even though it was declared as a local one.*/
var car = "Toyota";
var price = 40000;

if (price > 30000) {
  var car = "You can buy a Toyota";
}
console.log(car) // Toyota
/* in this above exmpale I was expecting the value of the global variable (Toyota). However, it gives me the value of the local varible (You ca buy a Toyota).*/

/*  Developers wanted to draw a boundary between global and local scope which is crucial in programming. Reassigning a value by another unexpectedly can generate an error. Thus, they wanted a way that is STRICTER. Var did not really respect block scope. A variable declared with var in a block scope could be accessed outside the scope which can interfere with other variable of the same name and change the value of the variable. 

// // Let is like var. the difference is that let is block scoped. Let allows developers to have control on the code. That is the reason why, let is preferred to variable declaration. For a loop the best identifier remains let; since it does not allow access to a variable outside the scope of a block. */
var car = "Toyota";
var price = 40000;

if (price > 30000) {
  let car = "You can buy a Toyota"; // let makes the variable respect its scope and cannot be used ouside the scope.
  console.log(car);
}
console.log(car) // Toyota

/* Finally, var declaration are globally scope or function scoped while let and const are block scoped. with let everysingle variable keep the value of their specific scope there is no 'interference' between variable. 

const means that the identifier can't be reassigned.
we use const for constant. as a convention we write constant with capital letter like this example:*/

const userCountry = 'HAITI';
console.log(userCountry)
userCountry = 'Japon'//variables.js:21 Uncaught TypeError: Assignment to constant variable. at variables.js:21
