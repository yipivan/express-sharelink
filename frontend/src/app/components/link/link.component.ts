import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../models/Link';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  deleteLink(link: Link) {
    this.dataService.deleteLink(link);
  }

}
