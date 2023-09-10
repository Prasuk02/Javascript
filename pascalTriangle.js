function generate(rows){
    let result = []
    for(let i=0; i<rows; i++){
        let rowArr = []
        for(let j=0; j<=i; j++){
            if((j == 0) || (j == i)){
                rowArr.push(1)
                continue
            }
            rowArr.push(getPascalValue(result[i-1], j))
        }
        result.push(rowArr)
    }
    return result
}

function getPascalValue(arr, index){
    return arr[index-1] + arr[index]
}

console.log(generate(5))