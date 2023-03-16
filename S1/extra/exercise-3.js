const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const pequeña= [];
const mediana=[];
const grande= [];

for (let i = 0; i < movies.length; i++) {

    if (movies[i].durationInMinutes < 100 ){
        console.log(pequeña.push(movies[i]));
        } else if (movies[i].durationInMinutes >= 200 ){
            console.log(grande.push(movies[i]));
        } else
        console.log(mediana.push(movies[i]));
        
    console.log("Las pelis pequeñas", pequeña);
    console.log("Las pelis medianas", mediana);
    console.log("Las pelis grandes", grande)
}

  


    

