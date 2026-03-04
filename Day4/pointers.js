// pointer is a technique where we place two pointers in the elements and we check based on the condtions's if not we move it acrodingly and also we use this pointers mostly on sorted arrays

// ex: problem to retuen a pair whose sum will be o in the array

function twoPointers(arr) {
  var first = 0;
  var last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[first] + arr[last] === 0) {
      return [arr[first], arr[last]];
    } else if (arr[i] + arr[last] > 0) {
      last--;
    } else {
      first++;
    }
  }
}
console.log(twoPointers([-3, -2, 1, 0, 1, 2, 3, 4]));
//                        f                         l
