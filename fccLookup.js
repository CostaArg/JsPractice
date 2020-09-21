// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (let index = 0; index < contacts.length; index++) {
    if (contacts[index].firstName === name && contacts[index].hasOwnProperty(prop)) {
    return contacts[index][prop];
}
else if (contacts[index].firstName === name && !contacts[index].hasOwnProperty(prop)) {
    return "No such property";
}
// else if(contacts[index].firstName !== name) {
//     return "No such contact";
// }
}
return "No such contact";
}

var response = lookUpProfile("Sherlock", "likes");
console.log(response);