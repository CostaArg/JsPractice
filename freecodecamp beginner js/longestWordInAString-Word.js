//Returns the word

let lengthArray = [];

function findLongestWordLength(str) {
let wordArray = str.split(" ");

wordArray.forEach(element => {
    lengthArray.push(element.length);
});

let biggestNum = Math.max(...lengthArray);
let biggestWord;

wordArray.forEach(element => {
    if (element.length === biggestNum) {
        biggestWord = element;
    }
})

return biggestWord;

}

// let biggestWord = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(biggestWord);