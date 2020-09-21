function countPositivesSumNegatives(input) {
  if (!input) return []
  else {
    const totalPositives = input.filter(num => num > 0).length;
    let totalNegatives = input.filter(num => num < 0)
                              .reduce((accumulator, currentValue) => accumulator + currentValue);
    const total = [totalPositives, totalNegatives];
    return total;
  }
}

console.log(countPositivesSumNegatives([1,2,3,-1,-2]));