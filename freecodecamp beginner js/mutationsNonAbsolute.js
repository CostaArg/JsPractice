function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
  return firstWord.includes(secondWord);
}

let result = mutation(["floor", "for"]);
console.log(result);