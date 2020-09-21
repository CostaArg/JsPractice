function uniteUnique(...arr) {
  let united = [];

  arr.forEach((element) => {
    element.forEach((item) => {
      united.push(item);
    });
  });

  let unique = [...new Set(united)];

  return unique;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
