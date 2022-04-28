import { Pipe, PipeTransform } from '@angular/core';
import {FilterTreeItem} from "./model/FilterTreeItem";

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(items: FilterTreeItem[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(val => {
      return val.name.toString().toLowerCase().startsWith(searchText);
    });
  }
}
