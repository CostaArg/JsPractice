let sentence = movingShift("c!", 2);
console.log(sentence);

function movingShift(s, shift) {
  let sList = s.split("");

  for (let index = 0; index < sList.length; index++) {
    let element = sList[index];
    let code = element.charCodeAt(0);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
      code += shift;

    element = String.fromCharCode(code);
    sList[index] = element;
  }

  let sentence = "";
  sList.forEach(element => {
    sentence += element;
  });

  return sentence;
}

function demovingShift(arr, shift) {
  return movingShift(arr, shift * -1);
}
