import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  searchTerm: Observable<string> = new Observable<string>();
  constructor() { }

  setSearchTerm(searchTerm: string) {
    this.searchTerm.next(searchTerm);
  }
  
  getSearchTerm():Observable<string> {
    return this.searchTerm;
  }
}
