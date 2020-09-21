function confirmEnding(str, target) {
  let sub = str.substring(str.length - target.length, str.length);

  console.log(sub);

  if (sub === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");