import { Component, OnInit } from '@angular/core';

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
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }

}
