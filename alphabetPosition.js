// function that converts letters to numbers based on their position in the alphabet
function alphabetPosition(text) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let result = "";

    text.toUpperCase().split("").filter(x=> alphabet.includes(x) ? result += Number(alphabet.indexOf(x) + 1) + " " : result);
    return result.trim();
}

console.log(alphabetPosition("NUMERIFY"));