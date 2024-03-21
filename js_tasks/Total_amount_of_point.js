//function to calculate the points
function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
        games.map(Number);
        let x = games[i][0];
        let y = games[i][2];
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

// Test cases

console.log("the points of x team : " + points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) );
console.log("the points of x team : " + points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
console.log("the points of x team : " + points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) );
console.log("the points of x team : " + points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) );
console.log("the points of x team : " + points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));

