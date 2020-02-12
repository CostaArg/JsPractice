//unfinished

let a = [1, 2, 3];
let b = ["a", "b", "c"];

function mergeArrays(a, b) {

    let zipped = [];

if (a.length >= b.length)
{
    a.map(function (element, i) {

        zipped.push(element);
        if (typeof (b[i]) != "undefined")
            zipped.push(b[i]);
    });

    return zipped;
}
else
{
    b.map(function (element, i) {

        zipped.push(element);
        if (typeof (a[i]) != "undefined")
            zipped.push(a[i]);
    });

    return zipped;
}

}

zipped = mergeArrays(a, b);

zipped.forEach(element => {
    console.log(element);
});