// Entering the numbers
console.log('Enter 3 numbers');

var num1 = 0;
var num3 = 8;
var num4 = 10 ;

console.log( 'the numbers is ' , num1, num3, num4);
console.log('the maximum number is ' + maxmium(num1, num3, num4));
console.log('the minmium number is ' + minmium(num1, num3, num4));


// maxmium function
function maxmium(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
    return num1;
    } else if (num2 > num1 && num2 > num3) {
    return num2;
    } else {
    return num3;
    }
}

// minmium function
function minmium(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
    return num1;
    } else if (num2 < num1 && num2 < num3) {
    return num2;
    } else {
    return num3;
    }
}
