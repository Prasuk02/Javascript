let remove_duplicate = (nums) => {
    let arr = []
    for (let num of nums){
        if(!arr.includes(num)){
            arr.push(num)
        }
    }
    return(arr)
}

console.log(remove_duplicate([1,1,2]))