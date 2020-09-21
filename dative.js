function dative(word) {
    let frontVowel = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    let backVowel = ["a", "á", "o", "ó", "u", "ú"];

    let lastVowel = word.split("").filter(x=> frontVowel.includes(x) || backVowel.includes(x)).pop();

if (frontVowel.some(x=> x == lastVowel)) {
    return word + "nek";
}
if (backVowel.some(x => x == lastVowel)) {
    return word + "nak";
}
}

console.log(dative("rokkant"));