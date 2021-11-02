import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from './interface/cepClass';

@Injectable({
  providedIn: 'root'
})
export class CepsService {

  constructor(private http: HttpClient) { }

  listarCeps(): Observable<any>{
    return this.http.get("http://localhost:3000/ceps");
  }

  cadCep(ceps: Cep): Observable<any>{
    return this.http.post("http://localhost:3000/ceps", ceps);
  }

  removerCep(id: any){
    return this.http.delete("http://localhost:3000/ceps/".concat(id));
  }

  getAddress(logradouro:any, localidade: any): Observable<any>{
    return this.http.get("http://localhost:3000/ceps/".concat(logradouro, localidade));
  }
}
