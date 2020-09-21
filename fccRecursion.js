function sum(arr, n) {
  // Only change code below this line
  if (n === 1) {
    return arr[0];
  } else if (n > 1) {
    return sum(arr, n - 1) + arr[n - 1];
  } else {
    return 0;
  }
  // Only change code above this line
}
var souma = sum([1, 2, 3], 1);
console.log(souma);