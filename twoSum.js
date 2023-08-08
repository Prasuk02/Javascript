// Time complexity: O(n^2)
// function twoSum(arr, target){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return [i, j]
//             }
//         }
//     }
//     return -1
// }

// Time complexity: O(n)
function twoSum(nums, target){
    let map = {}
    for(let i = 0; i<nums.length; i++){
        let rest = target - nums[i]
        if(rest in map){
            return [map[rest], i]
        }
        map[nums[i]] = i;
    }
}

console.log(twoSum([3, 2, 4, 3, 5], 9))