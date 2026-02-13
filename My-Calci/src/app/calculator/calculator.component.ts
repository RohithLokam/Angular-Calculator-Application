import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {


  constructor(private router: Router, private service: ServiceService) {}

  num1: number = 0;
  num2: number = 0;
  output: string='';

  selectedOperation: string = '';
  result: number | null = 0;
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

    if (this.result === null) {
      return;
    }

    this.output =`${this.num1} ${this.selectedOperation} ${this.num2} = ${this.result}`;
    if(!this.history.includes(this.output)){
      this.service.setResultPresent(true);
    this.history.push(this.output);
    }

  }

  getHistory() {
    if (this.result === null || !this.selectedOperation) {
      return;
    }
    const entry = `${this.num1} ${this.selectedOperation} ${this.num2} = ${this.result}`;
    if (!this.history.includes(entry)) {
      this.history.push(entry);
    }
  }
  

  viewResult() {
    if (this.result === null) {
      return;
    }
  
    this.router.navigate([
      '/results',
      this.num1,
      this.num2,
      this.selectedOperation,
      this.result
    ]);
  }


  ngOnInit(): void {
    localStorage.setItem('hasResult', 'false');
  }

}
