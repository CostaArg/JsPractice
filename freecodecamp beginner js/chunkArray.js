function chunkArrayInGroups(arr, size) {
  let masterArray = [];
  let array = [];

  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    array.push(arr[arrIndex]);

    if (array.length === size) {
      masterArray.push(array);
      array = [];
    }
  }

  if (array.length != 0) {
    masterArray.push(array);
  }
  return masterArray;
}

let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
console.log(result);
