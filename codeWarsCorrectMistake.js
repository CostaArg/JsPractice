let string = "5omething";

correct(string);

function correct(string) {
    strArr = string.split("");

    let five = "kati";
    while (five != "-1") {
        five = strArr.indexOf("5");
        if (five != "-1")
            strArr.splice(five, 1, "S");
    }

    // strArr.forEach(element => {
    //     if (element == 5)
    //     element = "S";
    // });

    string = strArr.join();
}

console.log(string);