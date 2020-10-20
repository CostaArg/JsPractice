function sumAll(arr) {
  let newArr = [];

  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);

  for (let element = minimum; element <= maximum; element++) {
    newArr.push(element);
  }

  return newArr.reduce((a, b) => a + b);
}

let result = sumAll([4, 1]);
console.log(result);
