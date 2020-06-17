var numberOfSteps  = function(num, result = 0) {
  while (num != 0) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    result += 1
  }
  return result;
};

console.log(numberOfSteps(14));
// 6