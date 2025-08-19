import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.page.html',
  styleUrls: ['./home-usuario.page.scss'],
})
export class HomeUsuarioPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {}

  mass(){
    this.router.navigate(['grafico-mass']);
  }

  tarefa(){
    this.router.navigate(['tarefa-consulta']);
  }

  objetivo(){
    this.router.navigate(['objetivo-consulta']);
  }

  anotacao(){
    this.router.navigate(['anotacao-consulta']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
