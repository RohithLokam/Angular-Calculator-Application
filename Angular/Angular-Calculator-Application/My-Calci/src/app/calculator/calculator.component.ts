import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  num1: number = 0;
  num2: number = 0;

  selectedOperation: string = '';
  result: number | null = 0;
isHistoryAdded: boolean = false;

  history: string[] = [];

  selectOperation(op: string) {
    this.selectedOperation = op;
    this.result = null;
  }

  calculate() {
    if (!this.selectedOperation) {
      return;
    }

    if (this.selectedOperation === '+') {
      this.result = this.num1 + this.num2;
    } else if (this.selectedOperation === '-') {
      this.result = this.num1 - this.num2;
    } else if (this.selectedOperation === '*') {
      this.result = this.num1 * this.num2;
    } else if (this.selectedOperation === '/') {
      this.result = this.num1 / this.num2;
    }

     this.isHistoryAdded = false;

  }

getHistory(){
  if(!this.isHistoryAdded && this.result !== null){
 this.history.push(
      `${this.num1} ${this.selectedOperation} ${this.num2} = ${this.result}`
    );
  }

      this.isHistoryAdded = true;
}

  constructor() { }

  ngOnInit(): void {
  }

}
