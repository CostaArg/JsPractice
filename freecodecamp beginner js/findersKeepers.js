function findElement(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (func(element)) {
      return element;
    }
  }
  return undefined;
}

// let result = findElement([1, 3, 5, 8, 9, 10], function (num) {
//   return num % 2 === 0;
// });
// console.log(result);