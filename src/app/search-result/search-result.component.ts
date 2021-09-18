import { DepositosService } from './../services/depositos.service';
import { Deposito } from './../models/depositos.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchString: string;
  depositos: any[];

  constructor(private service: DepositosService) {}

  ngOnInit(): void {
    this.service.depositosCadastrados().subscribe((depositos: Deposito[]) => {
      console.table(depositos);
      this.depositos = depositos;
    });
  }
}
