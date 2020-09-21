function largestOfFour(arr) {
let masterArray = [];

arr.forEach(subArray => {
    masterArray.push(Math.max(...subArray));
});

return masterArray;
}

let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result);