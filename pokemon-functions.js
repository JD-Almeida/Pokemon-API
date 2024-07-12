"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonDetails = getPokemonDetails;
const api_calls_1 = require("./api-calls");
function getPokemonDetails(pokemonName) {
    let pokemonData = (0, api_calls_1.getPokemon)(getPokemonURL(pokemonName));
    console.log(pokemonData);
}
function getPokemonURL(name) {
    const urlPrefix = "https://pokeapi.co/api/v2/pokemon/";
    console.log(urlPrefix);
    return urlPrefix.concat(name);
}
