function translatePigLatin(str) {
  let letterArray = str.split("");
  let consonants = "";

  for (let index = 0; index < letterArray.length; index++) {
    const element = letterArray[index];

    if (
      element != "a" &&
      element != "e" &&
      element != "i" &&
      element != "o" &&
      element != "u"
    ) {
      consonants += element;

    } else {
      break;
    }
  }

  if (consonants === "") {
    return str + "way";
  }
  else {
    return str.substring(consonants.length, str.length) + consonants + "ay";
  }
}

let result = translatePigLatin("consonant");
console.log(result);
