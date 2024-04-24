function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;
        

        if (arr[mid] < target)
            left = mid + 1;

        else
            right = mid - 1;
        
    }
    return -1;
}
const arr = [20, 30, 40, 10, 40];
const target = 10;
const index = binarySearch(arr, target);
    if (index !== -1)
    console.log(`${target} found at index ${index}`);
    else
    console.log(`${target} not found in the array`);

