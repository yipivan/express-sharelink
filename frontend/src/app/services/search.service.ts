import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor() { }

  searchString$ = new Subject<string>();

  search(input: string) {
    this.searchString$.next(input);
  }
}
