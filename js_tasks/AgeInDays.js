console.log("A Project to convarte the age from days to years and months and days");


  // input the age in days
let age= 1000;
ageInDays(age);

function ageInDays(age){
// calculate the age in years
var ageInYears = Math.floor(age /365 );
// calculate the age in months
var ageInMonths = Math.floor((age%365) /30) ;
//print the age
console.log("your age is ");
console.log( ageInYears + "   years");
console.log( ageInMonths + "   months");
console.log(  (age-(ageInYears*365 + ageInMonths*30 )) + "   days");
}



