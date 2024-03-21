//entering the data
let yearData = {
    January: {
        '1': 'Naughty',
        '2': 'Naughty',
        '31': 'Nice',
    },
    February: {
        '1': 'Nice',
        '2': 'Naughty',
        '28': 'Nice',
    },

    December: {
        '1': 'Nice',
        '2': 'Nice',
        '31': 'Naughty'
    }

}
//functions to chesk Nice or Naughty in each day of month
function NauOrNice(yearData) {
    let countNaughty=0;
    let countNice=0;
    for ( let monthData in yearData) {
        let month = yearData[monthData];
        for (let dayData in month) {
            
            if (monthData[dayData] === 'Nice') {
                countNice++;
    }
            else if (monthData[dayData]  === 'Naughty') {
                countNaughty++;
    }
}
}
// compare nice and naughty
if (countNaughty>countNice) {
    return 'Naughty';
}
else {
    return 'Nice';
}
}
// outputs
console.log(NauOrNice(yearData));

