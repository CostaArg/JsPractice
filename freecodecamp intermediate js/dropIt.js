function dropElements(arr, func) {
  let index = arr.findIndex(func);
  if (index === -1) {
      return [];
  }
  else {
    return arr.splice(index, arr.length)
  }
}

console.log(dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }));


// let index = arr.map((x) => (!func(x) ? arr.indexOf(x) : ""));
// return arr.splice(0, index - 1);