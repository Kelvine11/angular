import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../utils/types/pokemon.type';
import { PokemonService } from '../utils/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons;
  }


}
