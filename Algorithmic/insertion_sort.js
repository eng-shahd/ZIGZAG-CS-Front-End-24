function insertionSort(array) {
    
    for (let i = 1; i < array.length; i++) {
        let current_value = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current_value) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current_value;
    }
    return array;
}

const arr = [10, 1, 0, 7, 6];
Sorted_array = insertionSort(arr.slice());
console.log("Original array:", arr);
console.log("Sorted array:", Sorted_array);




