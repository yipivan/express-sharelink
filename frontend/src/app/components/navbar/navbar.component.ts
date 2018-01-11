import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  searchTerm: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSearch(search: string) {
    console.log("navbar component: " + search);
    this.searchTerm = search;
    this.search.emit(this.searchTerm);
  }
}
