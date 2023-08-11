function distributeCandies(candies){
    let max_candies_to_eat = candies.length/2               //3
    let uniqueCandiesMap = {}                               //{}
    for(let candy of candies){                              //{1: 1, 2: 1, 3:1}
        if(!(candy in uniqueCandiesMap)){
            uniqueCandiesMap[candy] = 1
        }
    }  
    console.log(uniqueCandiesMap.length)        
    if(Object.keys(uniqueCandiesMap).length >= max_candies_to_eat){             //3>=3 -> true
        return max_candies_to_eat                                               //return 3
    }
    else{
        return Object.keys(uniqueCandiesMap).length
    }
}

// function distributeCandies(candies){
//     let max_candies_to_eat = candies.length/2
//     for(let i=0; i<candies.length; i++){                       
//         for(let j=i+1; j<candies.length; j++){
//             if(candies[i] == candies[j]){
//                 candies.splice(j, 1)
//                 j--
//             }
//         }
//     }        
//     console.log(candies)
//     if(candies.length >= max_candies_to_eat){            
//         return max_candies_to_eat                                    
//     }
//     else{
//         return candies.length
//     }
// }

console.log(distributeCandies([6,6,6,6,6, 6]))