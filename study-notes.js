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
// Let's calculate the years, months & weeks you left with a function.
function lifeInWeeks(age) {
    var yearsRemaning = 90 - age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left");
}
lifeInWeeks(27); // You have 22995 days, 3276 weeks, and 756 months left


// This calculation is to see the probability of getting married with your Couple. 
var myName = prompt("What's your name?");
var coupleName = prompt("What's the name of your Couple?")
var loveCalculator = Math.random();

loveCalculator = loveCalculator * 100;
loveCalculator = Math.floor(loveCalculator) + 1;

// Using if-else conditions & Logic

if (loveCalculator > 70) {
    alert("The probabilty of getting married with " + coupleName + " is " + loveCalculator + " %." + "and you'all will love each other to the end of times");
}
 else {
     alert("The probabilty of getting married with " + coupleName + " is " + loveCalculator + " %." + "And probably you will break up after having a discussion about Peanut butter, LOL.");
 } 


// Here are more to practice if-else conditions
function bmiCalculator(weight,height) {

    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation;
    
    if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi < 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}

if (bmi >= 25) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}
   
   return interpretation;
    
}

bmiCalculator(63,1.65);function bmiCalculator(weight,height) {

    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation;
    
    if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi < 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}

if (bmi >= 25) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}
   
   return interpretation;
    
}

bmiCalculator(63,1.65);

// Here are a serie of popular Coding Challenges.
// #1 FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {

if (count % 3 === 0 && count % 5 ===0) {
    output.push("Fizz");
} 
else if(count % 3 ===0) {
    output.push("Buzz");
}   
else if(count % 5 ===0) {
    output.push("Buzz");
}   
else {
    output.push(count);
}
count++; 
    console.log(output);
}

// #2 Random Selection to see who will pay the Lunch
function whosPaying(names) {
//here is a variable called random that's using the random/floor math & also choosing in the length of the name array.
var random = Math.floor(Math.random() * names.length);
// Here the variable choose a name randomly. 
var colegas = (names[random]);
// here is the return of the function we are requesting.     
return colegas + " is going to buy lunch today!";
}
console.log (whosPaying(["Jean", "Carlo", "Vesna", "Valeska", "Katherine", "Nicole", "Jesus", "Alberto", "David", "Sammuel"]) );
