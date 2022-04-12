import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {TREEITEM} from "../../../mock/mock-TREE-ITEM";
import {TREEITEMS} from "../../../mock/mock-TREE-ITEMS";


interface FilterTreeNode {
  uuid: string;
  name: string;
  children?: FilterTreeItem[];
}

interface FilterFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})

export class FilterTreeComponent implements OnInit {

  filterItem2: FilterTreeItem[]=[{
    uuid: 'dsfda',
    name: 'sadfdfdafads'
  }];
  TREE_DATA_SINGLE: FilterTreeItem[]=[TREEITEM];
  TREE_DATA = TREEITEMS;

  //toggles
  isSearchShown!: boolean;
  collapsed!: boolean;

  private transformer = (node: FilterTreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<FilterFlatNode>(
    node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.TREE_DATA_SINGLE;
  }

  ngOnInit(): void {

    }

  hasChild = (_: number, node: FilterFlatNode) => node.expandable;


  searchShow() {
    this.isSearchShown = ! this.isSearchShown;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

}

// todo ----------------!!!!!!!!!!!
// filter tree component
// implement text search field (to search component data)
// make text search field configurable to hide it where needed
// filter tree item component
// add "AND" "OR" "NOT" buttons to the filter tree item
// TODO make model and mock data for filterItems------------!!!!!!!!!

