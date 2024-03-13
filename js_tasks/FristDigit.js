// function to make the user enter a number
var number = prompt('Enter a number')
var fristDigit = number.toString()[0]

// check if the number is odd or even
if (fristDigit % 2 == 0) {
    console.log(" Even")
} else  {
    console.log("Odd")
}