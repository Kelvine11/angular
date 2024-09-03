import { Component } from '@angular/core';
import { OrderPipe } from '../utils/pipes/order/order.pipe.component';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [
    OrderPipe
  ],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {

  series = ["toto", "tata", "tutu"]

  remove(serie: string) {
    this.series.splice(this.series.indexOf(serie), 1);
  }

  order: 'ASC' | 'DESC' = 'ASC'
  
  changeOrder(){
    this.order = this.order == 'ASC'? 'DESC' : 'ASC';
  }

}
