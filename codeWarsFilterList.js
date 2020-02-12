let l = ["asd", "gfh", "3", 4];

console.log(filter_list(l));

function filter_list(l) {

    for (let i = 0; i < l.length; i++) {
        if (typeof (l[i]) === "string") {
            l.splice(i, 1);
            i--;
        }

    }

    return l;
}