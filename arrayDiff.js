//from "a" take only the things that are not in b
const arrayDiff = (a, b) => a.filter(x=>!b.includes(x));

console.log(arrayDiff([3,4], [3]));