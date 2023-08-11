
//Time complexity of selection sort is : O(n^2)
function selectionSort(arr){
    // for(let i in arr)   //not working corretly
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if(min !== i){
            let c = arr[i]
            arr[i] = arr[min]
            arr[min] = c
        }

        //swapping without using temperory variables
        // arr[i] = arr[i] + arr[min]
        // arr[min] = arr[i] - arr[min]
        // arr[i] = arr[i] - arr[min]
    }
    return arr
}

console.log(selectionSort([0, 7, 8, 4, 0, 2, 3, 1, 4, 6, 9, 0, 0, 0, 6, 5, 8, 9, 3, 1, 0]))