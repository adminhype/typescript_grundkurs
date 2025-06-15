import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "typescript";
  // types bei Objekten
  person:{
    readonly name: string | number; //
    age: number;
    position?: string; // ? = nicht zwingend notwendig
  } = {
    name: "Adem",
    age: 27,
    // position: "Software Engineer"
  }

  constructor() {
    this.person.name =  27;

  }
}