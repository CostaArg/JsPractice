function getIndexToIns(arr, num) {
let counter = 0;
arr.forEach(element => {
    if (num > element)
    counter++;
});
return counter;
}

let number = getIndexToIns([5, 3, 20, 3], 5);
console.log(number);