let pokemon = []

async function getPokemon(){
    const response = await fetch(`pokemon.json`)
    if(!response.ok){
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }
    pokemon = await response.json()
    return pokemon
    
}

getPokemon().then(pokemon =>{
    console.log(pokemon)
    document.getElementById("grid").innerHTML = `${pokemon.map(getPokemonHTML).join('')}`
})

function getPokemonHTML(indivPokemon){
    return `<div>ID:${indivPokemon.id} ${indivPokemon.name.english} Type: ${indivPokemon.type} HP: ${indivPokemon.base.HP} Attack: ${indivPokemon.base.Attack} Defense: ${indivPokemon.base.Defense} Speed: ${indivPokemon.base.Speed}</div>` 
}