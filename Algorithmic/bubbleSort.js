
function bubbleSort(arr, n)
{
    let i, j, temp;
    let check;
    for (i = 0; i < n - 1; i++)
    {
        check = 0;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                check = 1;
            }
        }

        if (check == 0)
        break;
    }
}


let arr = [ 6, 4, 5, 2, 3, 1, 9];
let n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: "+ arr);

