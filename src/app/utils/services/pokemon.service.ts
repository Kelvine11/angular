import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  constructor() {
  }

  addPokemon(pokemon: Pokemon) {
    if (!this.contain(pokemon)) {
      this.pokemons.push(pokemon);
    }
  };

  remove(pokemon: Pokemon) {
    if (this.contain(pokemon)) {
      this.pokemons.splice(this.pokemons.indexOf(pokemon), 1)
    }
  }

  contain(pokemon: Pokemon) {
    return this.pokemons.indexOf(pokemon) != -1
  }

}
