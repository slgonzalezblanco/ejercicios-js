const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

const juego= videogames.filter(
    function(categoria){
        return categoria.genders.includes("RPG");
    }
);
console.log(videogames);

const juego2 = juego.reduce(function (accumulator,videogame){
    return accumulator + videogame.score;},0);
   
const media= juego2/3;
console.log(media);