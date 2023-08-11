// let move_zeros = function(nums){
//     let arr = [];
//     for(let num in nums){
//         if(nums[num] === 0){
//             nums.splice(num, 1)
//             arr.push(0)
//         }
//     }
//     return [...nums, ...arr]
// }

// solving in-place
function moveZeros(nums){
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 0){
            let movedZeros = true;
            for(let j = i+1; j<nums.length; j++){
                if(nums[j]){
                    movedZeros = false;
                    nums[i] = nums[i] + nums[j]
                    nums[j] = nums[i] - nums[j]
                    nums[i] = nums[i] - nums[j]
                    break;
                }
            }
            if(movedZeros){
                return nums
            }
        }
    }
    return nums
}

console.log(moveZeros([0,1,0,3,12]))
// 1 3 12 0 0