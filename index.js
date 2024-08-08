// Exercise 1: Age Checker
// Ask the user to enter their age. If they are 18 or older, display "You are an adult." Otherwise, display "You are not an adult."


let age = prompt("What is your age?")

age = parseInt(age)

if(age>18){
  console.log("you are an adult")
}

else {
  console.log("you are not a adult")
}



// Exercise 2: Simple Comparison
// Write a program that prompts the user to enter two numbers and displays whether the first number is greater, less than, or equal to the second number.
// Note: make sure you have the correct types!

let num1 = prompt("enter a number")

num1 = parseInt(num1)

let num2 = prompt("enter another number")

num2 = parseInt(num2)

if(num1>num2){
  console.log("Number 1 is greater than Number 2")
}

else if (num1<num2){
  console.log("Number 1 is less than Number 2")
}

else{
  console.log("number1 is equal to number2")
}
// Exercise 3: Even or Odd
// Create a program that asks the user for an integer and then prints whether the number is even or odd. (Google how to check this!)

let integer = prompt("enter a number")

integer = parseInt(integer)

if(integer%2==0){
  console.log("the number is even")
}
else{
  console.log("The number is odd")
}

// Exercise 4: Day of the Week
// Prompt the user to enter a day of the week (e.g., "Monday"). Display a message that says whether it's a weekday or the weekend.

let dayoftheweek = prompt("Enter a day of a week")

if(dayoftheweek == "Saturday "||dayoftheweek == "Sunday"){
  console.log("it is the weekend")
}
else{
  console.log("it is a weekday")
}


// Exercise 5: Age Group Classifier
// Prompt the user to enter their age and categorize them into different age groups:
// - 0-12: Child
// - 13-19: Teenager
// - 20-64: Adult
// - 65+: Senior Citizen


let age2 = prompt("Enter age")

if(0<=age2<=12){
  console.log("You are a child")
}




// Exercise 6: Rock, Paper, Scissors Game
// Create a simple rock, paper, scissors game. Prompt the user to enter their choice (rock, paper, or scissors) and then randomly generate the computer's choice. Determine the winner and display the result.





