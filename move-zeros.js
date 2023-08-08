let move_zeros = function(nums){
    let arr = [];
    for(let num in nums){
        if(nums[num] === 0){
            nums.splice(num, 1)
            arr.push(0)
        }
    }
    return [...nums, ...arr]
}

console.log(move_zeros([0,1,0,3,12]))