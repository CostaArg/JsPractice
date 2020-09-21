function solution(input, markers) {
    let inputArray = input.split("\n");
    let outputArray = [];

    //search in every line
    for (let index = 0; index < inputArray.length; index++) {
        let isFound = false;

        for (let index2 = 0; index2 < markers.length; index2++) {

            //if you find any marker in the line, get the characters up to the index you found it
            if (inputArray[index].includes(markers[index2])) {
                let commentRemoved = inputArray[index].substring(0, inputArray[index].split("").indexOf(markers[index2]));
                outputArray.push(commentRemoved);
                isFound = true;
                break;
            }
        }

        //if you don't find any markers then add as is
        if (!isFound) {
            outputArray.push(inputArray[index]);
            isFound = false;
        }
    }

    //trim all spaces at the end
    for (let index = 0; index < outputArray.length; index++) {
        outputArray[index] = outputArray[index].trim();
    }

    return outputArray.join("\n");
};
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"], ));