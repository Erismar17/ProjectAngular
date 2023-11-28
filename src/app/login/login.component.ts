import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  saludo: String = '';
  message: String = '';
  resultado: String = '';
  correo: String = '';
  contrasena: String = '';

  constructor (
    public route: Router){}

  Registro() {
    this.route.navigateByUrl('register')
  }

  Password() {
    
  }
}