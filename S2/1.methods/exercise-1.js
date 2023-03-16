const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const ropa= 0
//for (const Camiseta of products){
for (let i = 0; i < products.length; i++) {
if (products[i].includes("Camiseta")) {
  console.log(products[i]);
}
}

//console.log( products[i].includes(`Camiseta`));
