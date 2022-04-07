import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FilterTreeItem {
  name: string;
  children?: FilterTreeItem[];
}


@Component({
  selector: 'app-filters',
  templateUrl: './FilterTreeItem.component.html',
  styleUrls: ['./FilterTreeItem.component.css']
})
export class FilterTreeItemComponent implements OnInit {
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }

}
