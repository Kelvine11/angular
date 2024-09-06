import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../utils/types/pokemon.type';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonService } from '../utils/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    PokemonCardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons: Pokemon[] = [];
  types = ['eau', 'feu', 'vent'];

  constructor(private pokemonService: PokemonService) {

  }

  pokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl(),
    attacks: new FormArray([new FormGroup({
      name: new FormControl('', [Validators.required]),
      power: new FormControl(5, [Validators.min(1), Validators.max(10)])
    })]),
    zone: new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  });

  get name() {
    return this.pokemonForm.controls.name;
  }

  get description() {
    return this.pokemonForm.controls.description;
  }

  get attaques() {
    return this.pokemonForm.controls.attacks;
  }


  addAttaque() {
    this.attaques.push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      power: new FormControl(5, [Validators.min(1), Validators.max(10)])
    }));
  }

  savePokemon() {
    if (this.pokemonForm.valid) {
      this.pokemons.push(this.pokemonForm.value as Pokemon)
      console.log(this.pokemons);
      this.pokemonForm.reset();
    }
  }

  remove(pokemon: Pokemon) {
    this.pokemons.splice(this.pokemons.indexOf(pokemon), 1)
  }

  addPokedex(pokemon: Pokemon) {
    this.pokemonService.addPokemon(pokemon);
  }

  removePokedex(pokemon: Pokemon) {
    this.pokemonService.remove(pokemon);
  }

}