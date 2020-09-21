const findOutlier = integers => {
  let firstThree = integers.slice(0, 3).map(x => x % 2 === 0).filter(Boolean).length;
  return (firstThree >= 2) ? integers.find(x => x % 2 !== 0) : integers.find(x => x % 2 === 0);
};

console.log(findOutlier([2, 6, 8, 10, 3]));