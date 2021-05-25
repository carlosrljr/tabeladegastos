import { Component, OnInit } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';
import { RotinaLancamentosService } from '../rotina-lancamentos/rotina-lancamentos.service';


import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styles: [
  ]
})
export class TabelaComponent implements OnInit {

  constructor(private tabelaService:TabelaService, private rotinaService:RotinaLancamentosService){};

  colunasTabela: Array<PoTableColumn> = [];

  items:any = [];

  ngOnInit(){
    this.colunasTabela = this.tabelaService.geraColunas();
    this.gerarTabela();
    this.rotinaService.alteracao.subscribe(()=>{
      this.gerarTabela();
    })

  }

  gerarTabela(){
    this.tabelaService.buscarLancamento().subscribe(lancamentos=>{
      console.log(lancamentos);


      let AliJan = 0;
      let AliFev = 0;
      let AliMar = 0;
      let AliAbr = 0;
      let AliMai = 0;
      let AliJun = 0;
      let AliJul = 0;
      let AliAgo = 0;
      let AliSet = 0;
      let AliOut = 0;
      let AliNov = 0;
      let AliDez = 0;

      let TraJan = 0;
      let TraFev = 0;
      let TraMar = 0;
      let TraAbr = 0;
      let TraMai = 0;
      let TraJun = 0;
      let TraJul = 0;
      let TraAgo = 0;
      let TraSet = 0;
      let TraOut = 0;
      let TraNov = 0;
      let TraDez = 0;

      let ComJan = 0;
      let ComFev = 0;
      let ComMar = 0;
      let ComAbr = 0;
      let ComMai = 0;
      let ComJun = 0;
      let ComJul = 0;
      let ComAgo = 0;
      let ComSet = 0;
      let ComOut = 0;
      let ComNov = 0;
      let ComDez = 0;

      let ConJan = 0;
      let ConFev = 0;
      let ConMar = 0;
      let ConAbr = 0;
      let ConMai = 0;
      let ConJun = 0;
      let ConJul = 0;
      let ConAgo = 0;
      let ConSet = 0;
      let ConOut = 0;
      let ConNov = 0;
      let ConDez = 0;

      let FarJan = 0;
      let FarFev = 0;
      let FarMar = 0;
      let FarAbr = 0;
      let FarMai = 0;
      let FarJun = 0;
      let FarJul = 0;
      let FarAgo = 0;
      let FarSet = 0;
      let FarOut = 0;
      let FarNov = 0;
      let FarDez = 0;

      let LazJan = 0;
      let LazFev = 0;
      let LazMar = 0;
      let LazAbr = 0;
      let LazMai = 0;
      let LazJun = 0;
      let LazJul = 0;
      let LazAgo = 0;
      let LazSet = 0;
      let LazOut = 0;
      let LazNov = 0;
      let LazDez = 0;

      let MerJan = 0;
      let MerFev = 0;
      let MerMar = 0;
      let MerAbr = 0;
      let MerMai = 0;
      let MerJun = 0;
      let MerJul = 0;
      let MerAgo = 0;
      let MerSet = 0;
      let MerOut = 0;
      let MerNov = 0;
      let MerDez = 0;

      let OutJan = 0;
      let OutFev = 0;
      let OutMar = 0;
      let OutAbr = 0;
      let OutMai = 0;
      let OutJun = 0;
      let OutJul = 0;
      let OutAgo = 0;
      let OutSet = 0;
      let OutOut = 0;
      let OutNov = 0;
      let OutDez = 0;


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
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          AliAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          AliMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          AliJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          AliJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          AliAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          AliSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          AliOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          AliNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="alimentacao" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          AliDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="compras" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          ComJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="compras" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          ComFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          ComMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          ComAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          ComMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          ComJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          ComJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          ComAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          ComSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          ComOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          ComNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="compras" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          ComDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="contas" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          ConJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="contas" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          ConFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          ConMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          ConAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          ConMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          ConJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          ConJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          ConAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          ConSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          ConOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          ConNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="contas" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          ConDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="farmacia" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          FarJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="farmacia" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          FarFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          FarMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          FarAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          FarMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          FarJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          FarJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          FarAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          FarSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          FarOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          FarNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="farmacia" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          FarDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="lazer" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          LazJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="lazer" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          LazFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          LazMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          LazAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          LazMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          LazJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          LazJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          LazAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          LazSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          LazOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          LazNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="lazer" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          LazDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="mercado" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          MerJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="mercado" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          MerFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          MerMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          MerAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          MerMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          MerJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          MerJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          MerAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          MerSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          MerOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          MerNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="mercado" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          MerDez += parseFloat(lancamentos[i].valor);
        }

        if(lancamentos[i]["tipo"]==="transporte" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          TraJan += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          TraFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          TraMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          TraAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          TraMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          TraJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          TraJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          TraAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          TraSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          TraOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          TraNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="transporte" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          TraDez += parseFloat(lancamentos[i].valor);
        }


        if(lancamentos[i]["tipo"]==="outros" && mes === "01"){
          console.log(typeof(lancamentos[i].valor));
          OutJan += parseFloat(lancamentos[i].valor);
        }
       if(lancamentos[i]["tipo"]==="outros" && mes === "02"){
          console.log(typeof(lancamentos[i].valor));
          OutFev += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "03"){
          console.log(typeof(lancamentos[i].valor));
          OutMar += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "04"){
          console.log(typeof(lancamentos[i].valor));
          OutAbr += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "05"){
          console.log(typeof(lancamentos[i].valor));
          OutMai += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "06"){
          console.log(typeof(lancamentos[i].valor));
          OutJun += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "07"){
          console.log(typeof(lancamentos[i].valor));
          OutJul += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "08"){
          console.log(typeof(lancamentos[i].valor));
          OutAgo += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "09"){
          console.log(typeof(lancamentos[i].valor));
          OutSet += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "10"){
          console.log(typeof(lancamentos[i].valor));
          OutOut += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "11"){
          console.log(typeof(lancamentos[i].valor));
          OutNov += parseFloat(lancamentos[i].valor);
        }
        if(lancamentos[i]["tipo"]==="outros" && mes === "12"){
          console.log(typeof(lancamentos[i].valor));
          OutDez += parseFloat(lancamentos[i].valor);
        }



      }


    this.items= [
      {Tipo:"Alimentação",Janeiro:AliJan,Fevereiro:AliFev,Março:AliMar,Abril:AliAbr,Maio:AliMai,Junho:AliJun,Julho:AliJul,Agosto:AliAgo,Setembro:AliSet,Outubro:AliOut,Novembro:AliNov,Dezembro:AliDez},

      {Tipo:"Transporte",Janeiro:TraJan,Fevereiro:TraFev,Março:TraMar,Abril:TraAbr,Maio:TraMai,Junho:TraJun,Julho:TraJul,Agosto:TraAgo,Setembro:TraSet,Outubro:TraOut,Novembro:TraNov,Dezembro:TraDez},

      {Tipo:"Compras",Janeiro:ComJan,Fevereiro:ComFev,Março:ComMar,Abril:ComAbr,Maio:ComMai,Junho:ComJun,Julho:ComJul,Agosto:ComAgo,Setembro:ComSet,Outubro:ComOut,Novembro:ComNov,Dezembro:ComDez},

      {Tipo:"Contas",Janeiro:ConJan,Fevereiro:ConFev,Março:ConMar,Abril:ConAbr,Maio:ConMai,Junho:ConJun,Julho:ConJul,Agosto:ConAgo,Setembro:ConSet,Outubro:ConOut,Novembro:ConNov,Dezembro:ConDez},

      {Tipo:"Farmácia",Janeiro:FarJan,Fevereiro:FarFev,Março:FarMar,Abril:FarAbr,Maio:FarMai,Junho:FarJun,Julho:FarJul,Agosto:FarAgo,Setembro:FarSet,Outubro:FarOut,Novembro:FarNov,Dezembro:FarDez},

      {Tipo:"Lazer",Janeiro:LazJan,Fevereiro:LazFev,Março:LazMar,Abril:LazAbr,Maio:LazMai,Junho:LazJun,Julho:LazJul,Agosto:LazAgo,Setembro:LazSet,Outubro:LazOut,Novembro:LazNov,Dezembro:LazDez},

      {Tipo:"Mercado",Janeiro:MerJan,Fevereiro:MerFev,Março:MerMar,Abril:MerAbr,Maio:MerMai,Junho:MerJun,Julho:MerJul,Agosto:MerAgo,Setembro:MerSet,Outubro:MerOut,Novembro:MerNov,Dezembro:MerDez},

      {Tipo:"Outros",Janeiro:OutJan,Fevereiro:OutFev,Março:OutMar,Abril:OutAbr,Maio:OutMai,Junho:OutJun,Julho:OutJul,Agosto:OutAgo,Setembro:OutSet,Outubro:OutOut,Novembro:OutNov,Dezembro:OutDez},

    ]
    })
  }



}
