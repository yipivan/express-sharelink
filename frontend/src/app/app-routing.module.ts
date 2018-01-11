import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLinkComponent } from './components/add-link/add-link.component';
import { LinkListComponent } from './components/link-list/link-list.component';

const routes: Routes = [
  { path: '', component: LinkListComponent, pathMatch: 'full' },
  { path: 'add', component: AddLinkComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
