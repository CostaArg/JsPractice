let str = "ooxx";

let something = XO(str);
console.log(something);

function XO(str) {
    return str.match(/x/g);
}