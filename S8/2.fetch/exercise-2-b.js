
const baseUrl = async (page)=> {  
    
    const response = await fetch(`https://api.nationalize.io?name=${page}`);
    const responseJson = await response.json ();
    console.log(responseJson);
     user(responseJson)
}
 
const button$$ = document.querySelector ("button")
const input$$ = document.querySelector ("input")
button$$.addEventListener("click", () =>baseUrl(input$$.value));    

const user = (person) => {  
    const p$$= document.createElement ("p");
    let categoria = `El nombre ${person.name} tiene `;
   

     for (const country of person.country) {
        const porcentaje = Math.floor(country.probability * 100);
        categoria += ` un ${porcentaje} porciento de ser de ${country.country_id}`;
     }
     document.body.appendChild(p$$);
     p$$.textContent = categoria;

    
    }





