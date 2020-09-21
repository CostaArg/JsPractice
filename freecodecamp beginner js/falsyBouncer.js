function bouncer(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}

let result = bouncer([7, "ate", "", false, 9]);
console.log(result);
