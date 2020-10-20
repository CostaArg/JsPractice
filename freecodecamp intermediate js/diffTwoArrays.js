function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = [...new Set(arr1.concat(arr2))];

  return newArr.filter(x => !(arr1.includes(x) && arr2.includes(x)));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
