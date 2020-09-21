const arrayDiff = (a, b) => a.filter(x=>!b.includes(x));

console.log(arrayDiff([3,4], [3]));