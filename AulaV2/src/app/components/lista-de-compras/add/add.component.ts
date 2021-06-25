import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Artigo } from 'src/app/class/artigo';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listaService : ListaService;

  constructor(private lista : ListaService) {
    this.listaService = lista;

  }

  ngOnInit(): void {
  }

  AdicionarLista(nome, preco, erro_prod, erro_preco){
    if (nome.length <= 0 && preco.length <= 0 ){
      alert("Erro: Insira o nome e o preço do produto!");
      erro_prod.style.display="block";
      erro_preco.style.display="block";
    }else if (nome.length <= 0 ){
      alert("Erro: Insira o nome do produto!");
      erro_preco.style.display="none";
      erro_prod.style.display="block";
    }else if(preco.length <= 0 ){
      erro_prod.style.display="none";
      alert("Erro: Insira o preço do produto!");
      erro_preco.style.display="block";
      }else{
        erro_prod.style.display="none";
        erro_preco.style.display="none";
        this.listaService.listaCompras.push(new Artigo(nome, preco));
        }

  }
}
