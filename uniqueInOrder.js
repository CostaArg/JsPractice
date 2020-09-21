function uniqueInOrder(givenString) {
let arr = [];

for (let index = 0; index < givenString.length; index++) {
    if (givenString[index] != givenString[index + 1]) {
        arr.push(givenString[index]);
    }
}

return arr;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));