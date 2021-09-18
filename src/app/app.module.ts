import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchStringComponent } from './search-string/search-string.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CadastroDepositoComponent } from './cadastro-deposito/cadastro-deposito.component';
import { DepositoDatailComponent } from './deposito-datail/deposito-datail.component';

@NgModule({
  declarations: [		
    AppComponent,
    SearchResultComponent,
    SearchStringComponent,
    HeaderComponent,
      CadastroDepositoComponent,
      DepositoDatailComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
