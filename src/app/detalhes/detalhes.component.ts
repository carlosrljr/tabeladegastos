import { Component, OnInit } from '@angular/core';
import { TabelaService } from '../home/tabela/tabela.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  lancamentos:any=[];

  constructor(private tabelaService:TabelaService) { }

  ngOnInit(): void {
    this.tabelaService.buscarLancamento().subscribe(lancamentos=>{
      for(let i=lancamentos.length-1;i>lancamentos.length-20;i--){
        this.lancamentos.push(lancamentos[i])
      }
    })
  }


}
