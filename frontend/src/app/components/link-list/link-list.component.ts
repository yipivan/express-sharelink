import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';

import { Link } from '../../models/Link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  // @Input('getSearch') searchTerm: string; //todo: update using service
  links: Link[]; 
  searchTerm: string;

  constructor(
    public dataService: DataService,
    public searchService: SearchService
  ) { 
  }

  ngOnInit() {
    this.getLinks();
    // this.searchTerm = this.searchService.getSearchTerm();
  }

  getLinks() {
    this.dataService.getLinks().subscribe(links => {
      // console.log(typeof links);
      this.links = links;
    })
  }

  onDeleteLink() {
    console.log("eventemitter works");
    this.getLinks();
  }
}
