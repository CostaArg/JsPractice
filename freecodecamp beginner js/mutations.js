function mutation(arr) {
  let firstWord = arr[0];
  let secondWord = arr[1];

  let firstArray = [];
  let secondArray = [];

  for (let index = 0; index < firstWord.length; index++) {
    const element = firstWord[index];
    firstArray.push(element.toLowerCase());
  }

  for (let index = 0; index < secondWord.length; index++) {
    const element = secondWord[index];
    secondArray.push(element.toLowerCase());
  }

  let counter = 0;

  for (let secArrIn = 0; secArrIn < secondArray.length; secArrIn++) {
    for (let firArrIn = 0; firArrIn < firstArray.length; firArrIn++) {
      if (secondArray[secArrIn] === firstArray[firArrIn]) {
        console.log(secondArray[secArrIn]);
        counter++;
        break;
      }
    }
  }

  if (counter === secondWord.length) {
    return true;
  } else {
    return false;
  }
}

let result = mutation(["floor", "for"]);
console.log(result);
