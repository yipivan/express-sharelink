import { Component, OnInit } from '@angular/core';
import { Link } from '../../models/Link';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

  tags: string[];

  constructor(
    public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addLink(addLinkForm: any) {
    console.log()

    let link:Link = {
      title: addLinkForm.value.title,
      url: addLinkForm.value.url,
      tags: addLinkForm.value.tags == "" ? this.tags : addLinkForm.value.tags
    }

    if (addLinkForm.invalid) {
      // Forbid the form from submitting if it is invalid.
      return;
    }
    this.dataService.addLink(link).subscribe(link => {
      this.router.navigate(['']);
    })
  }
}
