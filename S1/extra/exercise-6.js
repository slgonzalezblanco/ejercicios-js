const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < products.length; i++) {
    const ventas = products[i];
    if (ventas.sellCount >20){
        goodProducts.push(ventas);
    } else {
        badProducts.push(ventas);
    }
}
console.log("buenas peliculas",goodProducts, "malas peliculas",badProducts);