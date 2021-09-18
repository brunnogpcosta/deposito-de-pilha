import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() searcStringHeader = new EventEmitter<string>();

  countResult: number;
  searchString: string;

  constructor() {}

  ngOnInit(): void {}

  mySearchString($event) {
    console.log('Header: ', $event);
    this.searchString = $event;
    this.searcStringHeader.emit(this.searchString);
  }
}
