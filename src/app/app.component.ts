import { SearchStringService } from './services/search-string.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'deposito-de-pilha';
  searchString: string;

  mySearchStringFinal($event) {
    this.searchString = $event;
  }
}
