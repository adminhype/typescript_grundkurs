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

  fruit = "";
  fruitList = ["Apple"];

  constructor() {
    // wie kann ein fehler enstehen obwohl fruitlist nicht leer ist?
    // this.fruit = this.fruitList.pop() // pop ist string | undefined 

    let apple = this.fruitList.pop();
    // mit einer if abfrage können wir den Fehler vermeiden
    // wenn apple undefined ist, dann wird die if abfrage nicht ausgeführt
    if(apple !== undefined) {
      this.fruit = apple;
    } else{
      console.log("Es gibt keinen Apfel mehr!");
    }
  }
}
//#region 

//#endregion