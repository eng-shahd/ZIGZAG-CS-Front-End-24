// Enter the number of
var number = 5 ;

//check if  even number
function even(number) {
    return number % 2 === 0;
}

//print the even numbers
console.log("the even numbers between 1 and " + number)
function printEven(number) {
    for (var i = 1; i <= number; i++) {
    if (even(i)) {
        console.log(i);
    }
    }
}
//call the function
printEven(number);
