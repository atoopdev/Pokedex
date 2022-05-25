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
    document.getElementById("grid").innerHTML = `<div class="pokemon-category"><div>ID</div><div class="">English Name</div><div class="">Type</div><div class="">HP</div><div class="">Attack</div><div class="">Defense</div><div class="">Speed</div></div>
    ${pokemon.map(getPokemonHTML).join('')}`
})

function getPokemonHTML(indivPokemon){
    return `<div class="pokemon-listing"><div class="id">${indivPokemon.id}</div> <div class="name">${indivPokemon.name.english}</div> <div class="type">${indivPokemon.type}</div> <div class="hp">${indivPokemon.base.HP}</div> <div class="attack">${indivPokemon.base.Attack}</div> <div class="defense">${indivPokemon.base.Defense}</div> <div class="speed">${indivPokemon.base.Speed}</div></div>` 
}