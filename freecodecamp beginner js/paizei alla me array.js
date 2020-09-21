function frankenSplice(arr1, arr2, n) {
    let array = arr1.slice(0, arr1.length);
    console.log(array);
  
    arr2.splice(n, 0, array);
    console.log(arr2);
  }
  
  let result = frankenSplice([1, 2], ["a", "b"], 1);
  console.log(result);
  