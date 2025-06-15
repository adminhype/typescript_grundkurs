import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Typesccript';
//tupels
//   noteType: 200 | 404 = 404;

//   arr: [string, number] = ["200", 404];
//   constructor() {
//     this.arr = ["402", 404];
// }
}

//#region comments
// literals
// noteType: 200 | 404 = 400;
  

//   arr: [string, 200 | 404][] = []

//   constructor() {
//     this.noteType = "note";

//     this.handleNoteType();
//   }

//   handleNoteType() {
//     if (this.noteType === "note") {
//       console.log("Notiz wird angezeigt.");
//     } else if (this.noteType === "trash") {
//       console.log("Notiz befindet sich im Papierkorb.");
//     }
//   }
//#endregion