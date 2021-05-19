import { Component, OnInit } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';


import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styles: [
  ]
})
export class TabelaComponent implements OnInit {

  colunasTabela: Array<PoTableColumn> = [];

  items:any = [];

  ngOnInit(){
    this.colunasTabela = this.tabelaService.geraColunas();

    this.tabelaService.buscarLancamento().subscribe(lancamentos=>{
      console.log(lancamentos);

// replicar variaveis (AliAbr, AliMai... TraJan, TraFev, etc)

      let AliJan = 0;
      let AliFev = 0;
      let AliMar = 0;

// replicar IF alterando mes, tipo, variavel

      for (let i = 0; i < lancamentos.length;i++){
        let mes = lancamentos[i]["data"].split("-")[1];
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          AliJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="alimentacao" && mes === "02"){
        console.log(typeof(lancamentos[i].valor));
        AliFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          AliMar += parseFloat(lancamentos[i].valor);
        }




      }

// incluir o mês em um objeto para cada tipo

    this.items= [
      {Tipo:"Alimentação",Janeiro:AliJan,Fevereiro:AliFev,Março:AliMar},

    ]
    })
  }

  constructor(private tabelaService:TabelaService){}



}
