// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

var letters = ["a","b","c"];
// show b in the console 
console.log(letters[1]);
// --------------------------------------
// Exercise 2 - Array Positioning
var friends = [];


var joakim = { 
    "name": "Joakim"
};
var anton = {
    "name": "Anton"
};
var mathias = {
    "name": "Mathias"
};

friends.push(joakim, anton, mathias);
console.table(friends)
console.log();

// What a lonely array. Add at least 3 friend objects to it.  

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

var findNumber = significantMathNumbers.indexOf(1729);

console.log(findNumber);

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rocolla", "kale"]

diet.splice(3,0, "hamburger", "soda", "pizza");

console.table(diet);
console.log();

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale

// --------------------------------------


// --------------------------------------
// Exercise 5 - Remove element
diet.pop();

console.table(diet);
console.log();
// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
