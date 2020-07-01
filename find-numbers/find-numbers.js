var findNumbers = function(nums) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let digits = nums[i].toString().split('');
    
    if (digits.length % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers([[12,345,2,6,7896]]));
// 2