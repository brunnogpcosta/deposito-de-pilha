import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};

  constructor() {}

  ngOnInit(): void {}

  validaLogin() {
    console.table({ login: this.login.email, senha: this.login.senha });
  }
}
