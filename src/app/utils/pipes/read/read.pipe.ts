import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read',
  standalone: true
})
export class ReadPipe implements PipeTransform {

  transform(value: boolean): string {
    return value?`👍`:`👎`;
  }
}
