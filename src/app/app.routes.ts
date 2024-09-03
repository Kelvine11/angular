import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { SerieComponent } from './serie/serie.component';

export const routes: Routes = [
    {path: 'counter', component: CounterComponent},
    {path: 'serie', component: SerieComponent}
];
