import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchStringService {
  private searchString: string;

  constructor() {
    this.searchString = '';
  }

  registraSearchString(searchString: string) {
    this.searchString = searchString;
  }

  get mySearchString(): string {
    return this.searchString;
  }
}
