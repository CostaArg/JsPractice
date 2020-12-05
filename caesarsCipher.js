let sentence = encrypt("This is an encrypted message using Caesar's cipher.", 2);
console.log(sentence);

function encrypt(rawText, shiftNum) {
  let letterList = rawText.split("");

  for (let index = 0; index < letterList.length; index++) {
    let letter = letterList[index];
    let letterNum = letter.charCodeAt(0);

    if (letterNum >= 65 && letterNum <= 90) {
      letterNum += shiftNum;

      if (letterNum > 90) {
        letterNum -= 26;
      }
    }

    if (letterNum >= 97 && letterNum <= 122) {
      letterNum += shiftNum;

      if (letterNum > 122) {
        letterNum -= 26;
      }
    }

    letter = String.fromCharCode(letterNum);
    letterList[index] = letter;
  }

  let sentence = "";
  letterList.forEach((letter) => {
    sentence += letter;
  });

  return sentence;
}