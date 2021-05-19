import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  incluir(form: any){
      console.log(form);
      console.log(form.value.subtipo);
      console.log(form.value.descricao);
  }

}
