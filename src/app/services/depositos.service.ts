import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposito } from '../models/depositos.models';

@Injectable({
  providedIn: 'root',
})
export class DepositosService {
  private depositos: any[];
  private url = 'http://localhost:3000/depositos';

  constructor(private httpClient: HttpClient) {}

  depositosCadastrados(): Observable<Deposito[]> {
    return this.httpClient.get<Deposito[]>(this.url);
  }

  adicionarDeposito(depositos) {
    this.depositos.push(depositos);
  }
}
