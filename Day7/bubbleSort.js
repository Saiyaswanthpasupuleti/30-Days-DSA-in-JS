function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Value of I", i);
    for (let j = i + 1; j < arr.length - 1; j++) {
      console.log("Value of J", j);
      if (arr[j] > arr[j + 1]) {
        // a=b
        // b=c
        // c=a
        // This is Method 1 by using Temp
        // var temp=arr[i]
        // arr[i]=arr[j]
        // arr[j]=temp
        // This is the Second Way
        [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));
