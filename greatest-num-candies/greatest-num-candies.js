var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
    
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= Math.max(...candies)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }  
    
  return result;
};

console.log(kidsWithCandies([4,2,1,1,2], 1))