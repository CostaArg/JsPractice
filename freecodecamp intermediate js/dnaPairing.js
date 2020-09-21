let dnaArray = [];

function pairElement(str) {
  let request = str.split("");

  request.forEach((element) => {
    let subArray = [];
    subArray.push(element);

    if (element === "A") {
      subArray.push("T");
    } else if (element === "T") {
      subArray.push("A");
    } else if (element === "G") {
      subArray.push("C");
    } else if (element === "C") {
      subArray.push("G");
    }

    dnaArray.push(subArray);
  });

  return dnaArray;
}

// let result = pairElement("ATCGA");
// console.log(result);