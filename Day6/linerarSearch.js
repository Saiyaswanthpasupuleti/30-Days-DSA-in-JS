// Linear Search : Checking one At a time is called linear Search
function data(arr, value) {
  //

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
}
console.log(data([1, 2, 3, 4, 5, 6, 7], 6));
