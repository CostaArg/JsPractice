function zero(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(0" + value + ")")();
  }
  return "0";
}
function one(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(1" + value + ")")();
  }
  return "1";
}
function two(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(2" + value + ")")();
  }
  return "2";
}
function three(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(3" + value + ")")();
  }
  return "3";
}
function four(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(4" + value + ")")();
  }
  return "4";
}
function five(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(5" + value + ")")();
  }
  return "5";
}
function six(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(6" + value + ")")();
  }
  return "6";
}
function seven(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(7" + value + ")")();
  }
  return "7";
}
function eight(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(8" + value + ")")();
  }
  return "8";
}
function nine(value) {
  if (value !== undefined) {
    return new Function("return " + "Math.floor(9" + value + ")")();
  }
  return "9";
}

function plus(value) {
  return "+" + value;
}
function minus(value) {
  return "-" + value;
}
function times(value) {
  return "*" + value;
}
function dividedBy(value) {
  return "/" + value;
}

let result = two(times(two()));

console.log(result);
