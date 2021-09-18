import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  styleUrls: ['./search-string.component.css'],
})
export class SearchStringComponent implements OnInit {
  @Output() whenSearch = new EventEmitter<string>();

  searchString: string = '';

  constructor() {}

  ngOnInit(): void {}

  mySearchString() {
    console.log('Search String: ', this.searchString);
    this.whenSearch.emit(this.searchString);
  }
}
