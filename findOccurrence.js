let str = "experiment";

myArray = str.split("");

let list = [];

myArray.forEach(element => {
     if (element == "x")
         list.push(myArray.indexOf(element));
});

list.forEach(element => {
    console.log(element);
});