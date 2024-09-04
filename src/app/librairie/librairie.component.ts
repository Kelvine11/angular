import { Component } from '@angular/core';
import { ReadPipe } from '../utils/pipes/read/read.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [
    ReadPipe,
    FormsModule
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

  livre = {
    title: '',
    author: '',
    isRead: false
  }

  submit(): void{

    const livre1 = {
      title: this.livre.title,
      author: this.livre.author,
      isRead: false
    }
    this.livres.push(livre1);
    this.livre.title = "";
    this.livre.author= "";


  }
  

}
