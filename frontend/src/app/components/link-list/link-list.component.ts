import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs/Subject';

import { Link } from '../../models/Link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  links: Link[]; 
  searchString: string = "";

  constructor(
    public dataService: DataService,
    public searchService: SearchService
  ) { 
  }

  ngOnInit() {
    this.getLinks();
    this.searchService.searchString$.subscribe(res => {
      this.searchString = res;
    })
  }

  getLinks() {
    this.dataService.getLinks().subscribe(links => {
      // console.log(typeof links);
      this.links = links;
    })
  }

  onDeleteLink() {
    // console.log("eventemitter works");
    this.getLinks();
  }

}
