import { Component } from '@angular/core';
import { ReadPipe } from '../utils/pipes/read/read.pipe';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [
    ReadPipe
  ],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {

  souligner = 'souligner';
  rien = "rien";

  livres = [
    {
      title: "toto",
      author: "tata",
      isRead: false
    },
    {
      title: "toto2",
      author: "tata2",
      isRead: true
    }
  ]

  changeIsRead(index: number) {
    this.livres[index].isRead = !this.livres[index].isRead;
  }

}
