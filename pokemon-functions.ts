import { getPokemon } from "./api-calls"

export function getPokemonDetails(pokemonName: string){
    let pokemonData = getPokemon(getPokemonURL(pokemonName))
    console.log(pokemonData)
}

function getPokemonURL(name: string): string{
    const urlPrefix = "https://pokeapi.co/api/v2/pokemon/"
    console.log(urlPrefix)
    return urlPrefix.concat(name)
}