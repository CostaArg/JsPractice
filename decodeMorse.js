const decodeMorse = (morseCode) => {
    let morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "...---...", ".-.-.-", "-.-.--"];
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "SOS", ".", "!"];

    return morseCode.split("   ").map(x=>x.split(" ").filter(x => x !== "").map(x=>x.replace(x, alphabet[morseAlphabet.indexOf(x)])).join("")).join(" ").trim();
};

console.log(decodeMorse("···−−−···"));