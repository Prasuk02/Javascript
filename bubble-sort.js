// Time complexity: O(n^2)
// Total iterations for outerloop is array length - 1
// Total iterations for innerloop is array length - outerloop iteration number
function bubleSort(arr){
    for(let i=1; i <= arr.length-1; i++){
        for(let j=0; j < arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
            }
        }
    }
    return arr
}

console.log(bubleSort([0, 7, 8, 4, 0, 2, 3, 1, 4, 6, 9, 0, 0, 0, 6, 5, 8, 9, 3, 1, 0]))