let string = "50METH1NG";

string = correct(string);

function correct(string) {

    string = string.replace(/5/g, "S");
    string = string.replace(/0/g, "O");
    string = string.replace(/1/g, "I");
    return string;
}

console.log(string);