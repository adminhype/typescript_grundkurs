import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  arr: (number | string)[] = [1, 2]; // hier wird ein Array erwartet, das entweder Zahlen oder Strings enthalten kan
  // arr: number | string[] = [1, 2]; // funktioniert auch nicht weil es ein Array ist, das nur Zahlen oder Strings enthalten soll
  constructor() {
    this.arr = [112, "456"] // erwartet wird eine number, aber es wird ein String übergeben
    this.add(1, 2); // hier wird add aufgerufen, die Parameter sind Zahlen
}
add (a:number, b:number) { //vordefinieren was für ein typen die Parameter haben sollen
    return a + b;
} 
}

//#region comments

// add (a:number, b:number):number { // das was nach den klammern kommt, ist der Rückgabetyp der Funktion
//     return a + b;
// }
// wenn kein returnwert angegeben wird, ist der rückgabetyp undefiniert

//#endregion