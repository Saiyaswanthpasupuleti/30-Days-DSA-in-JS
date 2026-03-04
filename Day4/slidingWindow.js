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
console.log(slidingWindiow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
