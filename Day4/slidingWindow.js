function slidingWindiow(arr, num) {
  var maxSum = 0;
  var tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum -= arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
// console.log(slidingWindiow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function primeNumber(num) {
  for (let i = 2; i <= num; i++) {
    var prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i);
    }
  }
}
// console.log(primeNumber(10));

function returnIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log(returnIndex([1, 2, 3, 4, 5, 6], 4));
