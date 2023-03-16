const toys = [{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'},
 {id: 40, name: 'El gato con Guantes'},
 {id: 40, name: 'El gato felix'}]

 const nuevoToys = []
 for (const toy of toys) {
      if (!toy.name.includes("gato")) {
         nuevoToys.push(toy)
      }
  
   }
   console.log(nuevoToys);
 
 //for (let i = 0; i < products.length; i++) {
   // if (products[i].includes("Camiseta")) {
   //   console.log(products[i]);
   // }
   // }