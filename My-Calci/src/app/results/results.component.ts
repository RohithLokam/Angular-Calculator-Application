import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  num1!: number;
  num2!: number;
  operation!: string;
  result!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.num1 = +params['num1'];
      this.num2 = +params['num2'];
      this.operation = params['op'];
      this.result = +params['result'];
    });
  }

}
