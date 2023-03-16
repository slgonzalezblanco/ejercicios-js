const baseUrl = async (page)=> {  
    
    const response = await fetch(`https://api.nationalize.io?name=${page}`);
    const responseJson = await response.json ();
    console.log(responseJson);
     
}

const button$$ = document.querySelector ("button")
const input$$ = document.querySelector ("input")
button$$.addEventListener("click", () =>baseUrl(input$$.value));

  