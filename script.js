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
    document.getElementById("grid").innerHTML = `<div class="pokemon-category"><div>ID</div><div class="">English Name</div><div class="">Type</div></div>
    ${pokemon.map(getPokemonHTML).join('')}`
})

function getPokemonHTML(indivPokemon){
    return `<div class="pokemon-listing"><div class="pokemon-id">${indivPokemon.id}</div> <div class="pokemon-name">${indivPokemon.name.english}</div> <div class="pokemon-type">${indivPokemon.type.join(' / ')}</div> <div class="pokemon-stat">HP: ${indivPokemon.base.HP}</div> <div class="pokemon-stat">Attack: ${indivPokemon.base.Attack}</div> <div class="pokemon-stat">Defense: ${indivPokemon.base.Defense}</div> <div class="pokemon-stat">Speed: ${indivPokemon.base.Speed}</div>
    <div class="pokemon-add-names">${indivPokemon.name.japanese}</div>
    <div class="pokemon-add-names">${indivPokemon.name.chinese}</div>
    <div class="pokemon-add-names">${indivPokemon.name.french}</div>
    </div>` 
}