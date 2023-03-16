const findArrayIndex = (myArray, text) => {

    for (let i = 0; i < myArray.length; i++) {
  
      if (myArray[i] == text) {
  
      //   console.log(i);
  
        return i;
      }
    }
  };
  
  const removeItem = (myArray, text) => {
      let i = 0;
      i = findArrayIndex(myArray, text);
      myArray.splice(i, 1);
  
  };
  const myArray = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
  
  
  removeItem(myArray, "Caracol");
  
  console.log(myArray);