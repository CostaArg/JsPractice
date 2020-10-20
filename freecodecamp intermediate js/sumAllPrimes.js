function sumPrimes(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    console.log(i, "=", isPrime(i));
    if (isPrime(i)) {
      sum = sum + i;
    }
  }

  return sum;
}

console.log(sumPrimes(10));

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
