const myArray = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (array, text) => {

  for (let i = 0; i < array.length; i++) {

    if (myArray[i] == text) {

        console.log(i);
    }
}
    return array;
}

findArrayIndex(myArray, "Mosquito");