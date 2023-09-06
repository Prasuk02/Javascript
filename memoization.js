function memoize(callback) {
  const cache = {}; 

  return function (...args) {
    console.log(cache);
    
    let key = JSON.stringify(args)
    
    if (cache[key]) {
      return cache[key];
    }
    
    cache[key] = callback(...args);
    return cache[key];
  };
}

let findSum = (...args) => {
  let sum = 0
  for(let value of args){
    sum = sum + value
  }
  return sum
}

let sum = memoize(findSum);
console.log(sum(1, 2, 5, 6, 7, 8));
console.log(sum(1, 2));
console.log(sum(1, 2, 5, 6, 7, 8));