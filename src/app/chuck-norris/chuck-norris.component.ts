import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChuckNorrisService } from '../utils/services/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent {

  chuck: any;

  constructor(private chuckService: ChuckNorrisService) {

  }

  getRandom(): void {
    this.chuckService.getRandom().subscribe(data => {
      this.chuck = data
    });
  }

}
