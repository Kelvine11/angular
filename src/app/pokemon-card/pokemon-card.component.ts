import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../utils/types/pokemon.type';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Output() pokemonDelete = new EventEmitter<Pokemon>();
  @Output() pokemonAddPokedex = new EventEmitter<Pokemon>();
  @Output() pokemonRemovePokedex = new EventEmitter<Pokemon>();

  remove(pokemon: Pokemon) {
    this.pokemonDelete.emit(this.pokemon);
  }

  addPokedex(pokemon: Pokemon) {
    this.pokemonAddPokedex.emit(this.pokemon);
  }

  removePokedex(pokemon: Pokemon) {
    this.pokemonRemovePokedex.emit(this.pokemon);
  }

}
