function solution(str) {
  let arr = [];
  while (str.length > 1) {
    arr.push(str.slice(0, 2));
    str = str.slice(2);
  }
  if (str.length == 1) {
    arr.push(str.slice(str.length - 1, str.length) + "_");
  }
  return arr;
}
console.log(solution("abc"));
