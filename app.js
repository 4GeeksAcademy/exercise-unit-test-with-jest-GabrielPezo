const sum = (a,b) => {
    return a + b
}

/*const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
} Lo toma como erroneo*/

function fromEuroToDollar (euro) {
    let dollar = 1.07;
        return euro * dollar
};


function fromDollarToYen (dollar) {
    let yen = 156.5 / 1.07;
    return dollar * yen
}

function fromYenToPound (yen) {
    let pound = 0.87 / 156.5;
    return yen * pound

}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
