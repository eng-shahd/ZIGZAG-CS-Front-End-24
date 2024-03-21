// enter the array
const Array = [
    [ 0, 1, 2, 3, 4 ],
    [ 10, 11, 12, 13, 14 ],
    [ 20, 21, 22, 23, 24 ],
    [ 30, 31, 32, 33, 34 ]
];
// the  function
function CSV(array) {
    let csv = '';
    for (let i = 0; i < array.length; i++) {
        csv += arr[i].join(',') + '\n';
    }
    csv = csv.slice(0, -1);
    return csv;
}

// print the output
console.log(CSV(Array));
