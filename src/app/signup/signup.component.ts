import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  saludo: String = '';
  message: String = '';
  resultado: String = '';
  correo: String = '';
  password: String = '';
  usuario: String = '';

  constructor (
    public route: Router){}

  LogIn() {
    this.route.navigateByUrl('login')
  }

  registrar() {
    const usuario = document.getElementById("usuario") as HTMLInputElement
    const correo = document.getElementById("correo") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement

    if (usuario.value === "" && correo.value === "" && password.value === "") {
      this.message = "Los campos no pueden estar vacios"
      return;
    }

    this.correo = correo.value
    this.password = password.value
    this.usuario = usuario.value

    var usuarioRegistrado = {
      "usuario" : this.usuario,
      "correo": this.correo,
      "password": this.password
    }
    localStorage.setItem("usuario", JSON.stringify(usuarioRegistrado))
    this.message = "usuario registrado"
  }
}