function coinCombo(cents) {

    let coins = [0, 0, 0, 0];

    while (cents >= 25) {
        cents = cents - 25;
        coins[3]++;
    }    

    while (cents >= 10) {
        cents = cents - 10;
        coins[2]++;
    } 

    while (cents >= 5) {
        cents = cents - 5;
        coins[1]++;
    } 

    while (cents >= 1) {
        cents = cents - 1;
        coins[0]++;
    } 

    return coins;
}

let cents = 110;

console.log(coinCombo(cents));