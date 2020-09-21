// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  
  if (prop === "tracks" && !collection[id].hasOwnProperty("tracks"))
  {
    collection[id]["tracks"] = [];
  }
  
  if (prop === "tracks" && value !== "") {
    collection[id]["tracks"].push(value);
  }
  
  if (value === "") {
    delete collection[id][prop];
  }
  
  if (prop !== "tracks" && value !== "")
  {
    collection[id][prop] = value;
  }
  
    return collection;
  }
  
var collection = updateRecords(2468, "tracks", "Free");
console.log(collection)