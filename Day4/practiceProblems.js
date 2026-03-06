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
// console.log(secondHighest("abc1111"));

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
// console.log(isPalindrome(-121));

// Two Pointer's
// Maximum Points that you can obtain from the cards

function addCards(arr, num) {
  var maxSum = 0;
  var tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[num - j] + arr[j];
    return Math.max(tempSum, maxSum);
  }
}
// console.log(addCards([1, 4, 2, 4, 2, 5, 3, 2], 4));

function maxSum(arr, num) {
  var leftSum = 0;
  var rightSum = 0;
  var maxSum = 0;
  for (let i = 0; i < num; i++) {
    leftSum += arr[i];
  }
  maxSum = leftSum;
  var rightIndex = arr.length - 1;

  for (var i = num - 1; i >= 0; i--) {
    leftSum = leftSum - arr[i];
    rightSum = rightSum + arr[rightIndex];
    rightIndex--;
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }
  return maxSum;
}
// console.log(maxSum([1, 2, 3, 4, 5, 6, 1], 3));
function longestSubstring(str) {
  var set = new Set();
  var left = 0;
  var maxLenght = 0;

  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[i]);
    maxLenght = Math.max(maxLenght, i - left + 1);
  }

  return maxLenght;
}

// console.log(longestSubstring("abcabcbb"));

function check(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(arr[j]);
    }
  }
}
console.log(check([1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
