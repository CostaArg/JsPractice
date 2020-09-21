// function humanReadable(seconds) {
//   let hours = Math.floor(seconds / 3600);
//   seconds = seconds - 3600 * hours;
//   let minutes = Math.floor(seconds / 60);
//   seconds = seconds - 60 * minutes;

//   hours = twoDigitize(hours);
//   minutes = twoDigitize(minutes);
//   seconds = twoDigitize(seconds);

//   return String(hours) + ":" + String(minutes) + ":" + String(seconds);
// }

// function twoDigitize(time) {
//     return (String(time).length == 1) ? "0" + String(time) : time;
// }

function humanReadable(seconds) {
  let hours = twoDigitize(Math.floor(seconds / 3600));
  seconds = seconds - 3600 * hours;
  let minutes = twoDigitize(Math.floor(seconds / 60));
  seconds = seconds - 60 * minutes;
  seconds = twoDigitize(seconds);

  return String(hours) + ":" + String(minutes) + ":" + String(seconds);
}

function twoDigitize(time) {
  return String(time).length == 1 ? "0" + String(time) : time;
}

console.log(humanReadable(61));
