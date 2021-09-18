import { DepositoDatailComponent } from './deposito-datail/deposito-datail.component';
import { CadastroDepositoComponent } from './cadastro-deposito/cadastro-deposito.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'cadastro-deposito', component: CadastroDepositoComponent },
  { path: 'index', component: SearchResultComponent },
  { path: 'detalhe/:nomeDeposito', component: DepositoDatailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
