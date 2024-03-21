function well(x){
    let count = 0;
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === "good") {
            count++;
        }
    }
    if (count === 1 || count === 2) {
        return "Publish!"
}
    else if (count > 2 ) {
        return "I smell a series!";
    }
    else
    return "Fail!";
}

//test
console.log("this idea is :\n");
console.log(well(['bad', 'bad', 'bad']));
console.log("============================================\n");
console.log("this idea is :\n");
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log("============================================\n");
console.log("this idea is :\n");
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
console.log("============================================\n");
