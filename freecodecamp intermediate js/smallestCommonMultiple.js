function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  arr[0] = min;
  arr[1] = max;

  let filler = min + 1;

  for (let index = 1; filler < max; index++) {
    arr.splice(index, 0, filler);
    filler++;
  }

  let LCM;

  for (let index = 0; index < arr.length - 1; index++) {
    if (index === 0) {
      LCM = (arr[index] * arr[index + 1]) / GCF(arr[index], arr[index + 1]);
    } else {
      LCM = (LCM * arr[index + 1]) / GCF(LCM, arr[index + 1]);
    }
  }

  return LCM;
}

function GCF(a, b) {
  if (a === 0) return b;

  return GCF(b % a, a);
}

console.log(smallestCommons([1, 5]));
