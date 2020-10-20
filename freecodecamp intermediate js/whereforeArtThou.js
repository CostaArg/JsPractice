function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  let properties = Object.keys(source);
  arr = collection.filter(object => properties.every(property => object[property] === source[property]));

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));