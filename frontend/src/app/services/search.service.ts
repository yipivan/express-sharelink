import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  searchTerm: string;
  constructor() { }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
  
  getSearchTerm() {
    return this.searchTerm;
  }
}
