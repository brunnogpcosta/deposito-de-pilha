import { Router } from '@angular/router';
import { DepositosService } from './../services/depositos.service';
import { Deposito } from './../models/depositos.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() searchString: string;
  //@Output() requestParams = new EventEmitter<string>();
  imgClean = '../../assets/undraw_No_data_re_kwbl.png';

  depositos: any[];
  qtd_depositos: number;
  myString: string;
  limit: number = 6;
  startLimit: number = 0;
  paginaAtual: number = 1;
  paginaDisponiveis: number;
  selectedOption: number = 6;

  constructor(private service: DepositosService, private router: Router) {}

  ngOnInit(): void {
    this.service.depositosCadastrados().subscribe((depositos: Deposito[]) => {
      //console.table(depositos);
      this.depositos = depositos;
      this.qtd_depositos = depositos.length;
      this.calculaPaginas();
    });
  }

  calculaPaginas() {
    if (this.qtd_depositos < this.selectedOption) {
      this.paginaDisponiveis = 1;
    } else {
      this.paginaDisponiveis = Math.round(
        this.qtd_depositos / this.selectedOption
      );
    }
  }

  escolhaLimit($event) {
    this.selectedOption = Number($event);
    this.limit = Number($event);
    this.startLimit = 0;
    this.paginaAtual = 1;
    this.calculaPaginas();

    //console.log('Option: ', this.selectedOption);
  }

  mySearchString($event) {
    console.log('Header: ', $event);
    this.myString = $event;

    this.service.depositosCadastrados().subscribe((depositos: Deposito[]) => {
      this.depositos = depositos.filter(
        (deposito) =>
          deposito.endereco.toLowerCase().indexOf(this.myString.toLowerCase()) >
          -1
      );
      this.qtd_depositos = this.depositos.length;
      this.calculaPaginas();
    });
  }

  goToDetail(detail) {
    //console.log('Detalhe: ', detail);
    // this.requestParams.emit(detail.id);
    this.router.navigateByUrl('/detalhe/:' + detail.id);
  }

  nextPage() {
    this.startLimit = this.limit;
    this.limit += this.selectedOption;
    //console.log('Limite: ' + this.limit);
    //console.log('Start Limit: ' + this.startLimit);
    this.paginaAtual += 1;
  }

  prevPage() {
    this.startLimit = this.startLimit - this.selectedOption;
    this.limit -= this.selectedOption;
    this.paginaAtual -= 1;
    //console.log('Limite: ' + this.limit);
    //console.log('Start Limit: ' + this.startLimit);
  }
}
