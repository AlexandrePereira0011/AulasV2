import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  largura:number;
  comprimento:number;
  cor:string="white";
  clicked:Boolean = false;
  
  changecolor(corR:string){
    this.cor=corR;
  }

  rodar(referencia){
     referencia.classList.add("rodar");
     setTimeout(() => {
      referencia.classList.remove("rodar");
      },4000);
  }

  cores(referencia){
    referencia.classList.add("mudarCor");
    document.getElementById("botao2").innerText="Parar";
    document.getElementById("botao2").addEventListener("click", ()=>{referencia.classList.toggle("mudarCor");document.getElementById("botao2").innerText="Mudar Cor";});
 }

  desformar(referencia){
    this.comprimento= (Math.random() * 999) + 1;
    this.largura= (Math.random() * 599) + 1;
    referencia.style.width = this.comprimento+"px";
    referencia.style.height= this.largura+"px";
  }

}
