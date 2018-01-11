import { Injectable, Input } from '@angular/core';
import { Link } from '../models/Link';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class DataService {
  links: Link[];
  constructor(
    private http: HttpClient
  ) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/api/links');
  }

  addLink(link: Link): Observable<Link> {
    return this.http.post<Link>('/api/link', link, httpOptions); 
  }

  deleteLink(link: Link): Observable<Link> {
    let url = `/api/link/?title=${link.title}`;
    return this.http.delete<Link>(url, httpOptions)
  }
}
