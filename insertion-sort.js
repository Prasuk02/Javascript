const insertionSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i+1] < arr[i]){
            for(let j=0; j<=i; j++){
                if(arr[j] > arr[i+1]){
                    let insertEle = arr[i+1]
                    for(let k=i; k>=j; k--){
                        arr[k + 1] = arr[k]
                    }
                    arr[j] = insertEle
                }
            }
        }
    }
    return arr
}

console.log(insertionSort([0, 7, 8, 4, 0, 2, 3, 1, 4, 6, 9, 0, 0, 0, 6, 5, 8, 9, 3, 1, 0]))