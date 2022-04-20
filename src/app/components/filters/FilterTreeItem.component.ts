import { Component, OnInit } from '@angular/core';
import {TREEITEMS} from "../../mock/mock-TREE-ITEMS";

interface FilterTreeItem {
  name: string;
  children?: FilterTreeItem[];
}

@Component({
  selector: 'app-filterTreeItem',
  templateUrl: './FilterTreeItem.component.html',
  styleUrls: ['./FilterTreeItem.component.css']
})
export class FilterTreeItemComponent implements OnInit {

  dataSource = TREEITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  getData(): FilterTreeItem[] {
    return this.dataSource;
  }
}
