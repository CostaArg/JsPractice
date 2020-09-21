const duplicateCount = (text) => {
  let original = text.toLowerCase().split("");
  [...new Set(text.toLowerCase())].forEach((element) => {
    original.splice(original.indexOf(element), 1);
  });
  return [...new Set(original)].length;
};

console.log(duplicateCount("Indivisibility"));