function destroyer(arr) {
    let arr2 = Array.from(arguments);
    arr2.shift();
    return arguments[0].filter(x => !arr2.includes(x));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));