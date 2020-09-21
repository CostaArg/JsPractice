function repeatStringNumTimes(str, num) {
  let repeated = str;

  if (num > 0) {
    for (let index = 0; index < num - 1; index++) {
      repeated += str;
    }

    return repeated;
  } else {
    return "";
  }
}

// let result = repeatStringNumTimes("*", 3);
// console.log(result);
