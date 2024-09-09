import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {PokemonService} from "../utils/services/pokemon.service";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

pokeSize?: number;

constructor(private pokemonService: PokemonService){

}

ngOnInit(){
this.pokemonService.pokemonSize$.subscribe({
  next: (size) => this.pokeSize = size,
})
}
}
