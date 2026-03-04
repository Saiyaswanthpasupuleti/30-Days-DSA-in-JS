// https://leetcode.com/problems/second-largest-digit-in-a-string/
var secondHighest = function (s) {
  var largest = [];
  function validate(char) {
    return !/[a-z]/i.test(char);
  }

  for (let i = 0; i <= s.length - 1; i++) {
    if (validate(s[i])) {
      if (!largest.includes(s[i])) {
        largest.push(s[i]);
      }
    }
  }
  largest.sort((a, b) => b - a);
  if (largest.length <= 1) {
    return -1;
  } else {
    return Number(largest[1]);
  }
};
console.log(secondHighest("abc1111"));

//  https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (y) {
  var x = y.toString();
  var first = 0;
  var last = x.length - 1;
  for (let i = 0; i <= x.length - 1; i++) {
    if (x[first] != x[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};
console.log(isPalindrome(-121));
