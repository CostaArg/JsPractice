function frankenSplice(arr1, arr2, n) {
  let firstArray = arr1.slice(0, arr1.length);
  let secondArray = [...arr2];

  for (let index = firstArray.length - 1; index >= 0; index--) {
    const element = firstArray[index];
    secondArray.splice(n, 0, element);
  }
  return secondArray;
}

// let result = frankenSplice([1, 2, 3], [4, 5], 1);
// console.log(result);
