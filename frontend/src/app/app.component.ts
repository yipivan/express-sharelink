import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string;
  title = 'app';

  onSearch(searchTerm: string) {
    console.log("app component: " + searchTerm);
    this.searchTerm = searchTerm;
  }
}
