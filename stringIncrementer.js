function incrementString (input) {
 if (!isNaN(input[input.length - 1])) {
     let text = input.split("").filter(x=>isNaN(x)).join("");
     let numbers = input.split("").filter(x=>!isNaN(x));

     let zeros = "";

     for (let index = 0; index < numbers.length - 1; index++) {
        if (numbers[index] == 0) {
            zeros += "0";
        }
        else {
            break;
        }
     }

     if (numbers[numbers.length - 1] == 9) {
         zeros = zeros.slice(0, -1)
     }

    return text + zeros + (Number(numbers.join("")) + 1);
 }
 else {
     return input += "1";
 }
}


console.log(incrementString("foobar099"));