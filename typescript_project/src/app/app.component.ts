import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // primitive typen
  String = "das ist ein String"; // zeichenkette
  number = 42; // eine Zahl
  boolean = true; // wahr oder falsch

  undefined = undefined; // eine Variable, die nicht definiert ist
  null = null; // eine variable, die explizit auf "nichts" gesetzt ist

  // erweiterte primitive typen
  bigint = BigInt(1234567890123456789012345678901234567890); // eine große Zahl, die größer ist als Number.MAX_SAFE_INTEGER
  symbol = Symbol('ein Symbol'); // ein eindeutiger Wert, der nicht mit anderen Werten verglichen werden kann
  any = "ich kann alles sein"; // eine Variable, die jeden Typ annehmen kann
}
