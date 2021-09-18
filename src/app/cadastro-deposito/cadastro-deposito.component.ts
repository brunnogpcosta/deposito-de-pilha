import { DepositosService } from './../services/depositos.service';
import { HttpClient } from '@angular/common/http';
import { Deposito } from './../models/depositos.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-deposito',
  templateUrl: './cadastro-deposito.component.html',
  styleUrls: ['./cadastro-deposito.component.scss'],
})
export class CadastroDepositoComponent implements OnInit {
  deposito: any = {};

  constructor(private service: DepositosService) {}

  ngOnInit() {}

  cadastrar() {
    this.service.adicionarDeposito(this.deposito).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
