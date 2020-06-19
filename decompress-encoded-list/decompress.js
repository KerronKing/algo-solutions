var decompressRLElist = function(nums, result = []) {
    
  for (let i = 0; i < nums.length; i += 2) {
    while (nums[i] > 0) {
      result.push(nums[i + 1]);
      nums[i] -= 1;
    }
  }
  
  return result;
};

console.log(decompressRLElist([1,2,3,4]));
// [2, 4, 4, 4]