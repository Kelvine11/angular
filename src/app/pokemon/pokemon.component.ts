import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  types = ['eau', 'feu', 'vent'];

  pokemonForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    types: new FormControl(this.types),
    attaques: new FormArray([new FormGroup({
      attaqueNom: new FormControl('', [Validators.required]),
      attaqueDescription: new FormControl('', [Validators.required]),
      degats: new FormControl(5, [Validators.min(1), Validators.max(10)])
    })]),
    zone: new FormGroup({
      zoneNom: new FormControl('', [Validators.required]),
      zoneRegion: new FormControl('', [Validators.required]),
    })
  });

  get nom() {
    return this.pokemonForm.controls.nom;
  }

  get description() {
    return this.pokemonForm.controls.description;
  }

  get attaques() {
    return this.pokemonForm.controls.attaques;
  }


  addAttaque() {
    this.attaques.push(new FormGroup({
      attaqueNom: new FormControl('', [Validators.required]),
      attaqueDescription: new FormControl('', [Validators.required]),
      degats: new FormControl(5, [Validators.min(1), Validators.max(10)])
    }));
  }

  savePokemon() {
    if (this.pokemonForm.valid) {
      console.log('Pokemon enregistrer', this.pokemonForm.value);
      this.pokemonForm.reset();
    }
  }


}