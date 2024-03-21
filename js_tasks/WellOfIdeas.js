// input an array of strings
let ideas =["good","good","good","good","bad","bad"];

// function to count the ideas
function countIdeas(ideas){
    let count = 0;
    for (let i = 0; i <= ideas.length; i++) {
        if (ideas[i] === "good") {
            count++;
        }
    }
    if (count === 1 && count === 2) {
        return "publish"
}
    else if (count > 2 ) {
        return "I smell a series !";
    }
    else
    return "Fail";
    
}
//print the result
let result = countIdeas(ideas);
console.log(result);
