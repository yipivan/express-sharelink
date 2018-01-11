import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public searchService: SearchService) { 
  }

  ngOnInit() {
  }

  onSearch(event: any) {
    this.searchService.setSearchTerm(event.target.value);
  }
}
