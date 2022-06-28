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
humanAge = (dogAge - 2) * 4 + 21;
var dogAge = 3;
alert("The human age of your dog is " + humanAge);
