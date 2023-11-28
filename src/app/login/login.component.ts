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
    this.route.navigateByUrl('signup')
  }

  /* Password() {
    
  } */

  login() {
    const correo = document.getElementById("correoUsuario") as HTMLInputElement;
    const contrasena = document.getElementById("correoUsuario") as HTMLInputElement;

   /*  if (this.usuario.email === correo.value && this.usuario.password === contrasena.value) {
      this.LogIn()
    } else {
      this.resultado = "No se ha podido iniciar sesión"
      return;
    } */
  }

  LogIn() {
    this.route.navigateByUrl('home')
  }
}