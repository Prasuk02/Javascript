function containsDuplicate(nums){
    let map = {}
    for(let i=0; i<nums.length; i++){
        if(nums[i] in map){
            return true;
        }
        map[nums[i]] = i
    }
    return false
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))