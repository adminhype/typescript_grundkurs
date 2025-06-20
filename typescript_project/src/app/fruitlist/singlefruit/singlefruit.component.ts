import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {


    getStar(): Array<number>{
    let result  = [];
    for(let i = 1; i <= 5; i++){
      result.push(i)
    }
    return result; 
  }
@Input()fruit = {
      name: "Apfel",
      img:"apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 2.3,
      reviews:[{name: "Waldemar W.", text: "gut für Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
    }

    inputData = "";

@Output()fruitName = new EventEmitter<string>();

sendInputData(){
  this.fruitName.emit(this.inputData)
  this.inputData = "";
}

}
