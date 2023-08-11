function singleNumber(nums){
    let map = {}
    for(let num of nums){
        if(num in map){
            map[num] = map[num] + 1
        }
        else{
            map[num] = 1
        }
    }
    for(let key in map){
        if(map[key] == 1){
            return key
        }
    }
    return -1
}

console.log(singleNumber([4,1,2,1,2]))