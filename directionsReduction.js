function dirReduc(arr) {
  let directions = [];

  for (let index = 0; index < arr.length; index++) {
    if (
      (arr[index] == "NORTH" && arr[index + 1] != "SOUTH") ||
      (arr[index] == "EAST" && arr[index + 1] != "WEST") ||
      (arr[index] == "WEST" && arr[index + 1] != "EAST") ||
      (arr[index] == "SOUTH" && arr[index + 1] != "NORTH")
    ) {
      directions.push(arr[index]);
    } else {
      index++;
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] != directions[index]) {
      directions = dirReduc(directions);
    }
  }

  return directions;
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
