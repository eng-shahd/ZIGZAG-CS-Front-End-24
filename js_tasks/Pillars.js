// the pillars details
let numPillars = 10;
console.log("The number of the pillars is :  " + numPillars)

let disPillars = 30  ;
console.log("The distance between the pillars is :  " + disPillars +"  meters");

let widthPillars = 10;
console.log("The width of the pillars is :  " + widthPillars + "  centimeters\n");

console.log("=====================================================\n");

//the function to calculate the distance between the two pillars
function calculate(numPillars, widthPillars,disPillars){
    let n = numPillars;
    let x = widthPillars;
    let d = disPillars * 100;
    let disBetween = (d *(n-1))+ (x *(n-2));

    return disBetween ;
    
}

//print the distance
console.log("the distance between the first and last pillar is:  "+ calculate(numPillars, widthPillars,disPillars) +"  centimeters");