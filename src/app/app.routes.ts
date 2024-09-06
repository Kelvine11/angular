import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { SerieComponent } from './serie/serie.component';
import { LibrairieComponent } from './librairie/librairie.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'serie', component: SerieComponent },
    { path: 'librairie', component: LibrairieComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: 'pokedex', component: PokedexComponent }
];
