import { Injectable } from '@angular/core';
import {FilterTreeItem} from "../model/FilterTreeItem";
import {TREEITEM} from "../mock/mock-TREE-ITEM";

@Injectable({
  providedIn: 'root'
})
export class SFilterItemService {

  constructor() { }

  getFilterTreeItem(): FilterTreeItem {
    return TREEITEM;
  }
}
