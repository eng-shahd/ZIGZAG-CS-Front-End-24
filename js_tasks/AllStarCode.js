function strCount(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log("the character  'o' repeated  " +strCount("Hello", 'o')+"   in  Hello"); 
console.log("<=================================================>");
console.log("the character  'l' repeated  " +strCount("Hello", 'l')+"   in  Hello"); 
console.log("<=================================================>");
console.log("the character  'z' repeated  " +strCount("", 'z')+ "   in  ''"); // returns 0

