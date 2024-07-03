
let regularExpression = /\W{1}\(\d{3}\)-\d{3}\s\(\d{4}\)/;

let phone = "+(995)-123 (4567)";

let matches = phone.match(regularExpression);
console.log(matches);