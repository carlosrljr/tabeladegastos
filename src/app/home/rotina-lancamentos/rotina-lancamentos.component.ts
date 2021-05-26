import { Component, OnInit } from '@angular/core';
import { RotinaLancamentosService } from './rotina-lancamentos.service';

@Component({
  selector: 'app-rotina-lancamentos',
  templateUrl: './rotina-lancamentos.component.html',
  styles: [
  ]
})
export class RotinaLancamentosComponent implements OnInit {

  duasColunas = 2;
  subtipoOpcoes=[
    {label: "Alimentação", value: "alimentacao"},
    {label: "Compras", value: "compras"},
    {label: "Contas", value: "contas"},
    {label: "Farmácia", value: "farmacia"},
    {label: "Lazer", value: "lazer"},
    {label: "Mercado", value: "mercado"},
    {label: "Transporte", value: "transporte"},
    {label: "Outros", value: "outros"},
  ];

  constructor(private rotinaService:RotinaLancamentosService) { }

  ngOnInit(): void {
  }

  incluir(form: any){
      const lancamento={
        "tipo":form.value.tipo,
        "data":form.value.data,
        "valor":form.value.valor,
        "descricao":form.value.descricao
      };
      this.rotinaService.salvarLancamento(lancamento);
      alert("Lançamento registrado!")

  }

}
