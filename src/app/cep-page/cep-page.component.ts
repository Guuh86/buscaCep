import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepsService } from '../ceps.service';
import { Cep } from '../interface/cepClass';
import { BuscaCepService } from '../services/busca-cep.service';

declare var google: any;

@Component({
  selector: 'app-cep-page',
  templateUrl: './cep-page.component.html',
  styleUrls: ['./cep-page.component.css']
})

export class CepPageComponent implements OnInit {

  cep = new Cep();
  ceps: Array<any> = new Array();

  lat: any;
  lng: any;
  zoom: number = 8;

  constructor(
    private cepService: BuscaCepService,
    private cepsService: CepsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.listarCeps();
  }

  geocode(logradouro: any, localidade: any){
    this.cepsService.getAddress(logradouro, localidade);
    let location = logradouro + localidade;
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyDpzzsAUi3UQNsUV7tEHs3Nlj0sCRVdoNc'
      }
    }).toPromise()
    .then(resp => {
      return this.convert(resp);
    })
  }

  convert(resp: any){
    this.lat = resp.results[0].geometry.location.lat;
    this.lng = resp.results[0].geometry.location.lng;
  }

  buscar() {
    this.cepService.buscarCep(this.cep.cep)
      .then((cep: Cep) => this.cep = cep)
      .catch(() => {
        alert("Não foi possível localizar o CEP informado!")
      })
  }

  cadastrarCep() {
    console.log(this.cep);
    this.cepsService.cadCep(this.cep).subscribe(cep => {
      this.cep = new Cep();
      this.listarCeps();
    }, err => {
      console.log("Erro ao cadastrar o CEP!!!")
    })
  }

  listarCeps() {
    this.cepsService.listarCeps().subscribe(ceps => {
      this.ceps = ceps;
    }, err => {
      console.log("Erro ao listar CEPs")
    })
  }

  remover(id: number) {
    this.cepsService.removerCep(id).subscribe(ceps => {
      this.cep = new Cep();
      this.listarCeps();
    }, err => {
      console.log('Erro ao excluir CEP')
    })
  }

}