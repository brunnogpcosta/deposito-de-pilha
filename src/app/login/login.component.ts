import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};
  temCadastro: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  validaLogin() {
    console.table({ login: this.login.email, senha: this.login.senha });
  }

  cadastraUsuario() {
    console.table({
      login: this.login.email,
      senha: this.login.senha,
      repeteSenha: this.login.confereSenha,
    });
  }

  setaCadastro() {
    this.temCadastro == true
      ? (this.temCadastro = false)
      : (this.temCadastro = true);
  }
}
