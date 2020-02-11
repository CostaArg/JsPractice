"use strict";

console.log("WOW");

let name = "kostas";
let job;
job = "instructor";

var course = "C#";

function show() {
    var secret = "Open Sesame";
    console.log("My secrets: " + secret)

    function inner() {
        var innerSecret = "What";
        console.log("Inner secretsss: " + innerSecret);
    }

    inner();

}

show();

console.log(course);

let counter = 3;
while (counter > 0) {
    var whileSecret = "While Secret";
    let realWhileSecret = "real secret";
    console.log(counter);
    counter--;
}

console.log(whileSecret);
console.log(realWhileSecret);

function crazy() {
    loco = "Wtf";
}

crazy();
console.log(loco);

function downloadYoutubeVideo(id) {

}

