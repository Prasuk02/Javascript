let findMissingNumber = (nums) => {
    let n = nums.length                         //9
    let sum_of_first_n = ((n * (n+1))/2)        //45
    let sum = 0                                 //0
    for(let num of nums){
        sum = sum + num                         //37
    }
    return sum_of_first_n - sum                 //45 - 37 = 8
}

console.log(findMissingNumber([9,6,4,2,3,5,7,0,1]))