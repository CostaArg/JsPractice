let str = "xooxo";

XO(str);

function XO(str) {

    myArray = str.split("");
    let counterX = 0;
    let counterO = 0;

    myArray.forEach(element => {
        if (element.toLowerCase() == "x")
            counterX++;
        else if (element.toLowerCase() == "o")
            counterO++;
    });

    if (counterX == counterO)
    return true;
    else
    return false;
}