let result = highAndLow("1 2 3 4 5");
console.log(result);

function highAndLow(numbers) {

    let intList = numbers.split(" ");

    for (let i = 0; i < intList.length; i++) {

        intList[i] = Number(intList[i]);
    }

    return Math.max(...intList) + " " + Math.min(...intList);
}