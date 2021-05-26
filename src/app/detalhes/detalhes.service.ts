import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {
    alteracao=new Subject<void>()

    deletarLancamento(lancamento:any){
    this.http.delete('http://localhost/projetos/api/delete.php?id='+lancamento.id).subscribe(resposta=>{
      console.log(resposta);
      this.alteracao.next()
    })
  }

  constructor(private http:HttpClient) { }
}
