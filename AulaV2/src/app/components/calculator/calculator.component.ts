import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num1 = 0;
  num2 = 0;
  sinal = "";
resultado;
calcular(){

  this.resultado =  eval(this.num1+ this.sinal +this.num2);
}

}
