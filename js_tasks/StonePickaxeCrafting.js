// // dataSource
let material1 = ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"];
let material2 = [];
let material3= ["Sticks", "Wool", "Cobblestone"];
let material4 = ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wool"];

//function to count the number of stons
function countStones(material) {
    let Cobblestonecounter = 0;
    let Stickscounter = 0;
    let stone = 0;
    for (let i = 0; i < material.length; i++) {
        if (material[i] === "Cobblestone") {
            Cobblestonecounter++;
        }
        else if (material[i] === "Wool") {
            Stickscounter+=4;
        }
        else if (material[i] === "Sticks") {
            Stickscounter++;
        }
    while(Cobblestonecounter>=3 && Stickscounter>=2){
        Cobblestonecounter-=3;
        Stickscounter-=2;
        stone++;
    }
}
    return stone;
}

// call the function

console.log( "the number of stones we can make from materia1 is     "+ countStones(material1));
console.log( "the number of stones we can make from materia2 is     "+  countStones(material2));
console.log( "the number of stones we can make from materia3 is     "+  countStones(material3));
console.log( "the number of stones we can make from materia4 is     "+  countStones(material4));

