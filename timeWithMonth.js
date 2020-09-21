const formatDuration = (seconds) => {
    if (seconds === 0) return "now";
  
//calculate time
    let years = Math.floor(seconds / 31536000);
    seconds = seconds - 31536000 * years;
    let months = Math.floor(seconds / 2629746);
    seconds = seconds - 2629746 * months;
    let days = Math.floor(seconds / 86400);
    seconds = seconds - 86400 * days;
    let hours = Math.floor(seconds / 3600);
    seconds = seconds - 3600 * hours;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - 60 * minutes;
  
//populate array with destructuring and add singular "time name"
    let board = [
      years + " year",
      months + " month",
      days + " day",
      hours + " hour",
      minutes + " minute",
      seconds + " second",
    ];
  
//get the first part of the array (the number), add comma and plural where necessary
    let hasCommaAtTheEndAndNoAnd = board
      .map((element) => {
        if (element.split(" ")[0] > 1) {
          return element + "s, ";
        } else if (element.split(" ")[0] == 1) {
          return element + ", ";
        } else {
          return "";
        }
      })
      .join("");
  
//remove the comma at the end
    let hasNoAnd = hasCommaAtTheEndAndNoAnd.substring(0, hasCommaAtTheEndAndNoAnd.length - 2).split(" ");
  
//go to the 3rd word from the end and replace the last index with "and" if needed
    if (hasNoAnd.length >= 3) {
      hasNoAnd.splice(hasNoAnd.length - 3, 1, hasNoAnd[hasNoAnd.length - 3].substring(0, hasNoAnd[hasNoAnd.length - 3].length - 1) + " and");
      let hasAnd = hasNoAnd.join(" ");
      return hasAnd;
    }
    else {
        return hasNoAnd.join(" ");
    }
  };
  
  console.log(formatDuration(59));