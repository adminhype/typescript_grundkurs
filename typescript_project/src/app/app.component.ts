import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person.interface';

//interfaces ähnlich wie eine klasse, aber ohne Methoden
// sie dienen dazu, den Typ von Objekten zu definieren
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "typescript";
  // ein Objekt vom Typ Person
  person: Person = {
    name: "Adem",
    age: 27,
  }

  constructor() {
    this.person.position =  "Software Engineer"; // optionales Feld, kann auch weggelassen werden

  }
}