import { Injectable } from '@angular/core';
import {FilterTreeItem} from "../model/FilterTreeItem";
import {TREEITEMS} from "../mock/mock-TREE-ITEMS";

@Injectable({
  providedIn: 'root'
})
export class SFilterItemsService {

  constructor() {
    }
  getFilterTreeItems(): FilterTreeItem[] {
    return TREEITEMS;
  }
}
