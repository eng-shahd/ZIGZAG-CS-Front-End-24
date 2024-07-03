



let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re1 = /\d{2}\/\d{2}\/\d{4}/;
let re2 = /\d{2}\s{1}\W{1}\s{1}\d{2}\s{1}\W{1}\s{1}\d{4}/;
let re3 = /\d{2}\s{1}\d{2}\s{1}\d{4}/;
let re4 =  /\d{2}\s{1}\d{2}\s{1}\d{2}/;

let re=/\d{2}(\/)?( - )?( )?\d{2}(\/)?( - )?( )?\d+/;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"