const numbersList = [];



const sum = (a, b) => {
    return a + b;
};

const substract = (a, b) => {
    return a - b;
};

const father = (a, b, callback) => {
    const resultado = callback(a , b)

    numbersList.push(resultado)
};

father(1, 2, sum)
father(5, 2, substract)

console.log(numbersList);