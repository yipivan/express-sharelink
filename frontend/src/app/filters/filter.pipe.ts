import { Pipe, PipeTransform } from '@angular/core';
import { Link } from '../models/Link';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(links: Link[], search: string=""): any {
    if(search=="") return links;
    return links.filter(link => link.url.toLowerCase().includes(search.toLowerCase()))
  }

}
