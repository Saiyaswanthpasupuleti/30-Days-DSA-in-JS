//  check the value in first array and it's sqaured includes in second array if yes return true else return false

function frequencyChecker(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i of arr1) {
    var squared = i ** 2;
    if (!arr2.includes(squared)) {
      return false;
    }
  }
  return true;
}
console.log(frequencyChecker([1, 2, 3]));
