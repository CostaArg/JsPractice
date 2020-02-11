var n = 123;

descendingOrder(n);

function descendingOrder(n) {
    var numArray = Array.from(n.toString());
    numArray.sort();
    numArray.reverse();
    var opposite = numArray.join("");
    opposite = Number(opposite);
    return opposite;
}