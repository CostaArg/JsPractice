function titleCase(str) {
  let wordArray = [];
  wordArray = str.split(" ");

  let sentence = "";

  for (let wordIndex = 0; wordIndex < wordArray.length; wordIndex++) {
      let element = wordArray[wordIndex];
      let newWord = "";
      
      for (let charIndex = 0; charIndex < element.length; charIndex++) {
        if (charIndex === 0) {
          newWord = element[0].toUpperCase();
        }
        else {
          newWord += element[charIndex].toLowerCase();
        }
      }

      if (wordIndex === wordArray.length - 1) {
        sentence += newWord;
      }
      else {
        sentence += newWord + " ";
      }

  }

  return sentence;

}

// let result = titleCase("I'm a little tea pot");
// console.log(result);