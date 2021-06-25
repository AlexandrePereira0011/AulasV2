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

  Add(produto, preco, msgerro1, msgerro2){
    if (produto.length <= 0 && preco.length <= 0 ){
      msgerro1.style.display="block";
      msgerro2.style.display="block";
    }else if (produto.length <= 0 ){
      msgerro1.style.display="none";
      msgerro2.style.display="block";
    }else if(preco.length <= 0 ){
      msgerro1.style.display="none";
      msgerro2.style.display="block";
      }else{
        msgerro1.style.display="none";
        msgerro2.style.display="none";
        this.listaService.listaCompras.push(new Artigo(produto, preco));
        }

  }
}
