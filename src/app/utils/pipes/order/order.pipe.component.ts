import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  standalone: true
})
export class OrderPipe implements PipeTransform {

  transform(tab: string[], order: 'DESC' | 'ASC'): string[] {

    tab = tab.sort();

    if(order == "DESC"){
      tab = tab.reverse();
    }

    return tab;
  }

}
