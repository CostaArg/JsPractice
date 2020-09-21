function myReplace(str, before, after) {
  let wordArray = str.split(" ");
  let newArray = [];

  wordArray.forEach((element) => {
    if (element === before) {
      if (element[0] === element[0].toUpperCase()) {
        element = after[0].toUpperCase() + after.substring(1, after.length);
      } else {
        element = after[0].toLowerCase() + after.substring(1, after.length);
      }
    }

    newArray.push(element);
  });

  let sentence = newArray.join();
while (sentence.includes(",")) {
    sentence = sentence.replace(",", " ");
}

  return sentence;
}

let result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(result);