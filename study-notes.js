// Different Data types:

//String
alert("Hello");

// Numbers
alert("12345");

// Boolean
alert(true);



// Counting characters
//  function: word.lenght
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.lenght;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")
// You have written 182 characters, you have -42 characters left.



// Slicing & Extracting parts of a String
// function: name.slice
var myName = "Jean Carlo";
myName.slice(0,1);


// Adding the function slice to the tweet count
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

// this is another way to do the same thing as before
alert(prompt("Compose your tweet:").slice(0, 140));

// Turning the first Letter of a word to upper case
// function word.toUpperCase();

// 1 Create a var that store the name that user enters via prompt
var name = prompt("What is your name?");

// 2 Capitalise the first letter of their Name
// a - isolate the first character
var firstChar = name.slice(0,1);
// b - Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
// c - isolate the rest of their name
var restOfName = name.slice(1,name.length);
// d - concatenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

// 3 We use the capitalised version of their name to greet them using an alert
alert("Hello " + capitalisedName);


// Basic Arithmetic & the module Operator in Javascritp
// Dog Age to Human Age foromula to practice this principle
var dogAge = prompt("How old is your dog?");
humanAge = ((dogAge - 2) * 4) + 21;
alert("The human age of your dog is " + humanAge);


/* The main lesson here is being able to accept inputs inside
the Parentheses of the function. */ 
/*Also, I'm using Math.floor() to make round the numbers of
a division. */
// Creating a function. 
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money/1.5);

    console.log("Buy " + numberOfBottles + " bottles of Milk")

    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
}
// Calling the function, you just have to write. 
getMilk(5);// Buy 3 bottles of Milk


// Let's calculate the years, months & weeks you left with a function.
function lifeInWeeks(age) {

yearsRemaning=(90-age);
ageDays= (90-age)*365;
ageMonth= yearsRemaning*12;
ageWeek= yearsRemaning*52;
}
var n = prompt("Enter Your Age ");
lifeInWeeks(n);
alert("You have "+ageDays+" Days or "+ageMonth+" Months or "+ageWeek+" weeks left to live");

