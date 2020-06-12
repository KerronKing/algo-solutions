var shuffle = function(nums, n) {
  let result = [];
  let a = [];
  let b = [];
  
  for (let i = 0; i < nums.length; i++) {
      i < n ? a.push(nums[i]) : b.push(nums[i]);
  }
  
  j = 0;
  
  while (result.length < nums.length) {
      result.push(a[j]);
      result.push(b[j]);
      j++;
  }
  
  return result;
};

console.log(shuffle([2,5,1,3,4,7], 3));
// [ 2, 3, 5, 4, 1, 7 ]
