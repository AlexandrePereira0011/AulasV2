import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private httpsAsk : HttpClient ) {
  }
  piadaDoServico ="Veio do Servico";

  link = "https://api.chucknorris.io/jokes/random";
  link2= "https://api.chucknorris.io/jokes/search";

  getPiada(){
    return this.httpsAsk.get(this.link);
  }

  getJokeFromCat(valoraPesquisar: string){
    return this.httpsAsk.get(this.link2, {
      params:{'query': valoraPesquisar}
    });

  }



}
