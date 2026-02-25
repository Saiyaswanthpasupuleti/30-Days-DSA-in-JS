function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    var multplyed = arr2.indexOf(arr1[i] ** 2);
    if (multplyed === -1) {
      return false;
    }
    arr2.splice(multplyed, 1);
  }
  return true;
}
same([1, 2, 3, 4], [1, 4, 9, 16]);
