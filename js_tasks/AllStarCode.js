//input the values
let string = "Hello ";
let character = "p";
// function to count how many times the character is repeated
function count(string , character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
}
//output the count
console.log("the string  " + string + "the character  " + character );
console.log("<=================================================>");
let c = count(string, character);
console.log("the character   " + character + "   repeated   " + c);