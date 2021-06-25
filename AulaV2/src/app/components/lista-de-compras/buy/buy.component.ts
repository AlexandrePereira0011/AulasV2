import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import {Artigo} from '../../../class/artigo';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  listaService : ListaService;

  constructor(lista : ListaService) {
    this.listaService = lista;
  }

  ngOnInit(): void {
  }

  Comprar(artigo : Artigo){
    artigo.carrinho = true;
    console.log("Artigo", artigo)
  }


}
