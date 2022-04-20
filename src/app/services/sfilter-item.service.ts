import { Injectable } from '@angular/core';
import {TREEITEM} from "../mock/mock-TREE-ITEM";
import {FilterTreeItem} from "../model/FilterTreeItem";

@Injectable({
  providedIn: 'root'
})
export class SFilterItemService {

  constructor() { }

  getFilterTreeItem(): FilterTreeItem {
    return TREEITEM;
  }
}
