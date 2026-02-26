function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swaaped = false;
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaaped = true;
      }
    }
    if (!swaaped) break;
  }
  return arr;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));
// This has O(n2) timeComplexity
