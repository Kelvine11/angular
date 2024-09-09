import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  pokemonSize$ = new BehaviorSubject<number>(0)

  constructor() {
  }

  addPokemon(pokemon: Pokemon) {
    if (!this.contain(pokemon)) {
      this.pokemons.push(pokemon);
      this.pokemonSize$.next(this.pokemons.length);
    }
  };

  remove(pokemon: Pokemon) {
    if (this.contain(pokemon)) {
      this.pokemons.splice(this.pokemons.indexOf(pokemon), 1)
      this.pokemonSize$.next(this.pokemons.length);
    }
  }

  contain(pokemon: Pokemon) {
    return this.pokemons.indexOf(pokemon) != -1
  }

}
