
// // dataSource
let material1 = ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"];
let material2 = [];
let material3= ["Sticks", "Wood", "Cobblestone"];
let material4 = ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"];
let material5 = ["Sticks","Sticks","Sticks","Sticks","Cobblestone","Cobblestone","Cobblestone"]


//function to count the number of stons
function stonePick(material) {
    let Cobblestonecounter = 0;
    let Stickscounter = 0;
    let stone = 0;
    for (let i = 0; i < material.length; i++) {
        if (material[i] === "Cobblestone") {
            Cobblestonecounter++;
        }
        else if (material[i] === "Wood") {
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

console.log( "the number of stones we can make from materia1 is     "+ stonePick(material1));
console.log( "the number of stones we can make from materia2 is     "+  stonePick(material2));
console.log( "the number of stones we can make from materia3 is     "+  stonePick(material3));
console.log( "the number of stones we can make from materia4 is     "+  stonePick(material4));
console.log( "the number of stones we can make from materia5 is     "+  stonePick(material5));


