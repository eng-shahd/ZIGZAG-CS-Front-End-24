// the collection array
const collection = ["3:1", "2:2", "0:1","3:4", "4:5", "5:6", "3:9", "7:2","4:4", "1:8"];

// create a function that calcolate the points of x team
function calculatePoints(collection) {
    let points = 0;
    for (let i = 0; i < collection.length; i++) {
        collection.map(Number);
        let x = collection[i][0];
        let y = collection[i][2];
// there is a problem with this above line when i enter a number takes two digits like 13 the code gives a rong answer ???
        if (x > y) {
            points += 3 ;
        } else if (x === y) {
            points += 1 ;
        } else if (x < y) {
        
        }
    }
    return points;
}

// print the points
console.log("the points of x team : " + calculatePoints(collection));

