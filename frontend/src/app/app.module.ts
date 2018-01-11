import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkComponent } from './components/link/link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { SearchComponent } from './components/search/search.component';

import {DataService } from './services/data.service';
import { SearchService} from './services/search.service';
import { FilterPipe } from './filters/filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LinkComponent,
    NavbarComponent,
    LinkListComponent,
    AddLinkComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
