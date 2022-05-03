import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {SFilterItemService} from "../../../services/sfilter-item.service";


interface FilterTreeNode {
  uuid: string;
  name: string;
  children?: FilterTreeItem[];
}

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css'],
  providers: [SFilterItemService],
})

@Injectable()
export class FilterTreeComponent implements OnInit {

  @Input() items: FilterTreeItem[];
  @Input() itemsSearch: FilterTreeItem;

  searchText: string = '';
  newVal: string;


//toggles
  isSearchShown!: boolean;
  collapsed!: boolean;

  //tree
  treeControl = new NestedTreeControl<FilterTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FilterTreeNode>();

  constructor() {
  }

  searchShow() {
    this.isSearchShown = !this.isSearchShown;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
    this.dataSource.data = this.items;
  }

  onSearchEvent(evt: any) {
    let temp: string;
    temp = evt.target.value;
    this.searchText = temp;
    this.dataSource.data = this.items.filter(val => {
      return val.name.toString().toLowerCase().startsWith(this.searchText);
    });

  }
}



