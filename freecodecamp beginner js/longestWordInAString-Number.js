//Returns the number

let lengthArray = [];

function findLongestWordLength(str) {
let wordArray = str.split(" ");

wordArray.forEach(element => {
    lengthArray.push(element.length);
});

let max = Math.max(...lengthArray);

return max;
}

// let biggestNum = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(biggestNum);