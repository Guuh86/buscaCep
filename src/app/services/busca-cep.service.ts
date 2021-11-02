import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../interface/cepClass';


@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  buscarCep(cep: string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then(resp => {
        return this.convertCep(resp);
      }); 
  }

  private convertCep(cepResp: any): Cep{
    let cep = new Cep();
    cep.cep = cepResp.cep;
    cep.logradouro = cepResp.logradouro;
    cep.bairro = cepResp.bairro;
    cep.localidade = cepResp.localidade;
    cep.uf = cepResp.uf;
    console.log(cep);
    return cep;
  }

}
