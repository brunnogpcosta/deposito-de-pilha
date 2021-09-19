import { ActivatedRoute, Router } from '@angular/router';
import { Deposito } from './../models/depositos.models';
import { DepositosService } from './../services/depositos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito-datail',
  templateUrl: './deposito-datail.component.html',
  styleUrls: ['./deposito-datail.component.css'],
})
export class DepositoDatailComponent implements OnInit {
  deposito: any = {};
  image: string = '../../assets/endereco_deposito_de_pilhas.jpg';

  constructor(
    private service: DepositosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe((url) => {
      this.service.depositosCadastrados().subscribe((depositos: Deposito[]) => {
        this.deposito = depositos.find(
          (deposito) =>
            deposito.id ==
            this.router.url.substring(10, Number(this.router.url.length))
        );
        console.log('detalhe: ', this.deposito);
      });
    });
  }
}
