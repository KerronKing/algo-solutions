var runningSum = function(nums) {
  let result = [nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i-1] + nums[i])
  }
  
  return result;
};

console.log(runningSum([1, 2, 3, 4, 5]));
