// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

var str = "message";

console.log(myObj.message);
// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

var myObj2 = {
    "name": "Joakim",
    "age": 25
};
console.log(myObj2);

// Create an object that has your name and age. 

// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

stackOverflow.isAllowed = true;

console.log(stackOverflow);
// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

delete thisSong.description;
thisSong.about = "Just a tribute.";

console.log(thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

// --------------------------------------