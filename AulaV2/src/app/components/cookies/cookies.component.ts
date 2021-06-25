import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.lerCookies();
  }

  aceiteiCookie:boolean;

  aceitarCookies(refCaixa:HTMLElement)
  {
    localStorage.setItem("cookie","1");
    refCaixa.classList.remove("animacaoSubir");
    refCaixa.classList.add("animacaoDescer");
    setTimeout(function(){  refCaixa.style.display ="none"; }, 500);

  }

  lerCookies(){
    localStorage.getItem("cookie");
    this.aceiteiCookie = localStorage.getItem("cookie") == "1" ? true : false;
  }
}
