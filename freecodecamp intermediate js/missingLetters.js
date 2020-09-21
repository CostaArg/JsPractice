let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function fearNotLetter(str) {

  let letter = str[0];
  let position;

  for (let index = 0; index < alphabet.length; index++) {
    const element = alphabet[index];

    if (element === letter) {
      position = index;
    }
  }

  let counter = 0;

  for (let index = position; index < alphabet.length; index++) {
    const element = alphabet[index];

    if (element != str[counter]) {
      return element;
    }

    counter++;
  }

  return undefined;
}

let result = fearNotLetter("stvwx");
console.log(result);
