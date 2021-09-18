import { DepositosService } from './../services/depositos.service';
import { HttpClient } from '@angular/common/http';
import { Deposito } from './../models/depositos.models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-deposito',
  templateUrl: './cadastro-deposito.component.html',
  styleUrls: ['./cadastro-deposito.component.scss'],
})
export class CadastroDepositoComponent implements OnInit {
  deposito: any = {};

  constructor(private service: DepositosService, private router: Router) {}

  ngOnInit() {}

  cadastrar() {
    this.service.adicionarDeposito(this.deposito).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('depositos');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
