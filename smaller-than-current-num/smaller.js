var smallerNumbersThanCurrent = function(nums) {
  let result = new Array(nums.length).fill(0);
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
          result[i] += 1;
      }
    }
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
// [4,0,1,1,3]