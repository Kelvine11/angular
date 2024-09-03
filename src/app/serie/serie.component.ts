import { Component } from '@angular/core';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {

  series = ["toto", "tata", "tutu"]

  remove(serie: string) {
    this.series.splice(this.series.indexOf(serie), 1);
  }

}
