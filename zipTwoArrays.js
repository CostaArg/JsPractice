let a = [1, 2, 3];
let b = ["a", "b", "c"];

let zipped = a.map(function (element, i) {
    return [element, b[i]];
});

zipped.forEach(element => {
    console.log(element);
});