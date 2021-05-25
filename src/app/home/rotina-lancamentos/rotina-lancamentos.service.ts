import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RotinaLancamentosService {
  alteracao=new Subject<void>()

  salvarLancamento(lancamento:any){
    this.http.post('http://localhost/projetos/api/create.php',lancamento,{responseType:"text"}).subscribe(resposta=>{
      console.log(resposta);
      this.alteracao.next()
    })
  }

  constructor(private http:HttpClient) { }
}


