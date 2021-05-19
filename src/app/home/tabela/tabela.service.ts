import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  geraColunas(): Array<PoTableColumn> {
    return [
      { property: 'Tipo', type: 'string'},
      { property: 'Janeiro', type: 'number'},
      { property: 'Fevereiro', type: 'number'},
      { property: 'Março', type: 'number'},
      { property: 'Abril', type: 'number'},
      { property: 'Maio', type: 'number'},
      { property: 'Junho', type: 'number'},
      { property: 'Julho', type: 'number'},
      { property: 'Agosto', type: 'number'},
      { property: 'Setembro', type: 'number'},
      { property: 'Outubro', type: 'number'},
      { property: 'Novembro', type: 'number'},
      { property: 'Dezembro', type: 'number'}
    ]}


  constructor(private http:HttpClient) { }

  buscarLancamento(){
    return this.http.get<any[]>("http://localhost/projetos/api/read.php");
  }
}
