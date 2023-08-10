// let fizzBuzz = function(n){
//     let resultArr = []
//     for(let i = 1; i<=n; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             resultArr.push('FizzBuzz')
//         }
//         else if(i % 3 == 0){
//             resultArr.push('Fizz')
//         }
//         else if(i % 5 == 0){
//             resultArr.push('Buzz')
//         }
//         else{
//             resultArr.push(i.toString())
//         }
//     }
//     return resultArr
// }

let fizzBuzz = function(n){
    let resultArr = []
    for(let i = 1; i<=n; i++){
        resultArr.push(i%3==0 && i%5==0 ? 'FizzBuzz' : i%3==0 ? "Fizz" : i%5==0 ? 'Buzz' : i.toString())
    }
    return resultArr
}


console.log(fizzBuzz(16))