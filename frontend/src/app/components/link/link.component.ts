import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../models/Link';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { OutputType } from '@angular/core/src/view';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;
  @Output() deletedLink = new EventEmitter();

  constructor(
    public dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  deleteLink(link: Link) {
    this.dataService.deleteLink(link).subscribe(res => {
      this.deletedLink.emit(null);
    })
  }
}
