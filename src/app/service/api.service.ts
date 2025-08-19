import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server: string = "http://localhost/capapretaapp/service/";

  constructor(private http : HttpClient) { }

  post(dados: any, caminho: string) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});
    
    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    const httpOptions = {
      headers: headers
    };

    let url = this.server + caminho;

    return this.http.post(url, JSON.stringify(dados), httpOptions);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  getUsuario() {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.data;
    }
    return null;
  }
}
