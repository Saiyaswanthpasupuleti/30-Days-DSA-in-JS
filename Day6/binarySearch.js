// // // Binary Search :we can eliminate half of the data and we can check in that it needs to be sorted
// // // let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9];
// // // arr.sort();
// // // const halfLogic = Math.floor(arr.length / 2);
// // // const firstPart = arr.slice(0, halfLogic);
// // // const secomdPart = arr.slice(halfLogic);
// // // console.log(firstPart, secomdPart);

// // function result(arr, val) {
// //   var firstIndex = 0;
// //   var lastIndex = arr.length - 1;
// //   var middle = Math.floor(firstIndex + lastIndex / 2);
// //   while (arr[middle] !== val && firstIndex <= lastIndex) {
// //     if (val < arr[middle]) {
// //       lastIndex = middle - 1;
// //     } else {
// //       firstIndex = middle - 1;
// //       middle = Math.floo(firstIndex + lastIndex / 2);
// //     }
// //   }
// //   return middle;
// // }
// // console.log(result([1, 2, 3, 4, 5, 6, 7, 8], 4));

// var longestPalindrome = function (letter) {
//   var start = 0;
//   var end = letter.length - 1;
//   var res = "";
//   while (start < end) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       left--;
//       right++;
//     }
//   }
//   return res;
// };
// var data = "";
// // console.log(longestPalindrome("babawd"));
// //                             s   e
