var subtractProductAndSum = function(n) {
  let sumHolder = 0;
  let sum = n.toString().split('');
  let prod = n.toString().split('').reduce((a, b) => a * b);
  
  for (let i = 0; i < sum.length; i++) {
    sumHolder += parseInt(sum[i]);
  }
  
  return prod - sumHolder;
};