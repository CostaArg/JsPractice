const myObject =
{

    name: "kostas",
    surname: "argy",
    hobbies: ["basket", "pool", "judo"],
    getFullName: function () {
        return this.name + " " + this.surname;
    },
    getHobbies: function () {
        return this.hobbies.join();
    }

};

console.log("Full Name: " + myObject.getFullName());
console.log("Hobbies: " + myObject.getHobbies());