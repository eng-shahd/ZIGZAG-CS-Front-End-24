// Enter the number
var number = prompt("Enter the number");

//calculate the sum
var sum = 0;
for (var i = 1; i <= number; i++) {
  sum = sum + i;
}

//display the sum
console.log("The sum of the numbers from 1 to " + number + " is: " + sum);