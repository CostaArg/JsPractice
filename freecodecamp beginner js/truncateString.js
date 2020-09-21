function truncateString(str, num) {
    let endResult;
if (str.length > num) {
    endResult = str.substring(0, num);
    endResult += "...";
    return endResult;
}
else {
    return str;
}

}

// let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(result);