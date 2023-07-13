// ------Tab 1
// if there's any truthy statement in the argument for the if statement, print true. if anything else, print false. 

// let input = "I am a string"

// if (input){
//     console.log("true")
// }else {
//     console.log ("falsy")
// }


// if the input value is true, print true. if the input value is falsy, print "the boolean value false is falsy"

// let input = false

// if (input) {
//     console.log ("true")
// } else {
//     console.log ("the boolean value false is falsy")
// }

// if the input value is truthy, print true. if the input value is falsy, print "the null value is falsy"

// let input = null

// if (input) {
//     console.log ("true")
// } else {
//     console.log ("The null value is falsy")
// }

// if input value is truthy, print true. if the input value is falsy, print "undefined is falsy"


// let input = undefined

// if (input) {
//     console.log ("true")
// } else {
//     console.log ("Undefined is falsy")
// }

// if input value is truthy, print true. if the input value is falsy print "the number 0 is falsy (the only falsy number)"


// let input = 0

// if (input) {
//     console.log ("true")
// } else {
//     console.log ("The number 0 is falsy (the only falsy number)")
// }

// if the input value is truthy, print true. if the input value is falsy, print "the empty string is falsy (the only falsy string)"

// let input = ""

// if (input) {
//     console.log ("true")
// } else {
//     console.log ("Tthe empty string is falsy (the only falsy string)")
// }

// ------------------------------------------------------------------


// Tab 3- Greater than 5

// step 1: set input values for num1 and num 2
// step 2: if num1 and num2 are both >= 5, print true 
// step 3: if not >=5  print false 


// let num1=5
// let num2=6

// let num1 = 10
// let num2 = 11

// let num1 = 0
// let num2 = 0

// let num1=1000
// let num2=-1000

// let num1=6
// let num2=4

// let num1 = 5
// let num2 = 5

// if( num1 && num2 >= 5){
//     console.log("true")
// } else {
//     console.log("false")

// }

// 

// TAB 2 - Number Line ----------------------------------------------------------- //
// step 1: put numbers in the inputs
// step 2: establish a variable that takes the sum of the two inputs.
// step 3: if “sum is greater than 100” is true, print “(the sum of the numbers) is greater than 100". if the sum is less than 100, print “sum is greater than 0”. If the sum is equal to zero, print “sum is equal to 0". If sum is negative, print “sum is a negative number”.

// let num1 = 50;
// let num2 = 51;

// let num1 = 99;
// let num2 = -2;

// let num1 = 0;
// let num2 = 101;

// let num1 = 500;
// let num2 = -500;

// let num1 = -1000;
// let num2 = 0;

// let num1 = -5;
// let num2 = 0;

// let sum = num1 + num2;
// if (sum > 100) {
//     console.log(sum + ” is greater than 100")
// } else if (sum > 0) {
//     console.log(sum + ” is greater than 0")
// } else if (sum == 0) {
//     console.log(sum + ” is equal to 0")
// } else if (sum < 0) {
//     console.log(sum + ” is a negative number”)
// }



// TAB 4 - Pair & Compare ----------------------------------------------------------- //
// Step 1: set values in variables for param1A, param1B, param2A, and param2B
// Step 2: if param1A is strictly equal to param1B OR param2A is strictly equal to param2B, print “true” otherwise print “false”
// let param1A = “cat”
// let param1B = “cat”
// let param2A = 6
// let param2B = “6”

// let param1A = “five”
// let param1B = 5
// let param2A = “dog”
// let param2B = “dawg”

// let param1A = 0
// let param1B = false
// let param2A = “horse”
// let param2B = “horse”

// let param1A = “eight”
// let param1B = “eight”
// let param2A = “ate”
// let param2B = “ate”

// let param1A = 11
// let param1B = “eleven”
// let param2A = “four”
// let param2B = “for”

let param1A = “cake”
let param1B = “cake”
let param2A = “pie”
let param2B = “pie”

if ((param1A === param1B) || (param2A === param2B)) {
    console.log(“true”)
} else {
    console.log(“false”)
}