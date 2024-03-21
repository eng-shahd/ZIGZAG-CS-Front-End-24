function pillars(numPill, dist, width) {
    let n = numPill;
    let d = dist * 100;
    let x = width;
    if (n == 1){
        return 0;
    }
    else{
    
    let disBetween = (d *(n-1))+ (x *(n-2));

    return disBetween ;
    }
}
//Sample test 
console.log("The number of the pillars is : 1 " );
console.log("The distance between the pillars is :10  ");
console.log("The width of the pillars is :10  \n");
console.log("the distance between "+ pillars(1,10,10)+"   centimeters");
console.log("=====================================================\n");

console.log("The number of the pillars is : 2 " )
console.log("The distance between the pillars is :20  ")
console.log("The width of the pillars is :25  \n")
console.log("the distance between "+ pillars(2, 20, 25)+"   centimeters")
console.log("=====================================================\n");

console.log("The number of the pillars is : 11 " )
console.log("The distance between the pillars is :15  ")
console.log("The width of the pillars is :30  \n")
console.log("the distance between "+pillars(11, 15, 30)+"   centimeters")
