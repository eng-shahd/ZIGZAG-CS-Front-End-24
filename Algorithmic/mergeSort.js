function merge_sort(array) {

    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let l_Half = array.slice(0, middle);
    let r_Half = array.slice(middle);

    let LeftHalf = merge_sort(l_Half);
    let RightHalf = merge_sort(r_Half);
    return merge(LeftHalf, RightHalf);
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}
let arr = [1, 2, 1, 7, 6, 5];
console.log("Original array:", arr);
console.log("Sorted array:", merge_sort(arr.slice()));
