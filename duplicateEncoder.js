const duplicateEncode = (word) => {
  const sorted = word.toLowerCase().split("").sort();
  const duplicates = [];

  for (let index = 0; index < sorted.length - 1; index++) {
    if (sorted[index] == sorted[index + 1]) {
      duplicates.push(sorted[index]);
    }
  }

  let output = "";

  word.toLowerCase().split("").forEach((element) => {
    if (duplicates.includes(element)) {
      output += ")";
    } else {
      output += "(";
    }
  });

  return output;
};

console.log(duplicateEncode("recede"));
