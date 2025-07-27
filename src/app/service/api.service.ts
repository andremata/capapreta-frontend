import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server: string = "http://localhost/capapretaapp/service/";

  constructor(private http : HttpClient) { }

  requisicao(dados: any, caminho: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }

    let url = this.server + caminho;

    return this.http.post(url, JSON.stringify(dados), httpOptions);
  }
}
