const fetchBad = async () => {

    const res = await fetch(`https://breakingbadapi.com/api/characters`)
    const data = await res.json()
    createPokemon(data)

}