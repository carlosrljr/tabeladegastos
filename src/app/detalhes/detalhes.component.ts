import { Component, Input, OnInit } from '@angular/core';
import { formatBytes } from '@po-ui/ng-components/lib/utils/util';
import { TabelaService } from '../home/tabela/tabela.service';
import { DetalhesService } from './detalhes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {
  colunas=[ {property:"id",label:"Número", width:120},
            {property:"tipo",label:"Tipo", width:120},
            {property:"data",label:"Data",width:200},
            {property:"valor",label:"Valor",width:120},
            {property:"descricao",label:"Descrição"}]


  lancamentos:any=[];

  dados=this.lancamentos;


  constructor(private tabelaService:TabelaService, private detalhesService:DetalhesService) { }

  ngOnInit(): void {
    this.tabelaService.buscarLancamento().subscribe(lancamentos=>{
      for(let i=lancamentos.length-1;i>lancamentos.length-20;i--){
        this.lancamentos.push(lancamentos[i])
      }
    })

  }

  deletarLancamento(form:any){
    const lancamento = {
      "id":form.value.deletar
    }
    this.detalhesService.deletarLancamento(lancamento);
    alert("Registro deletado")

  }


}
