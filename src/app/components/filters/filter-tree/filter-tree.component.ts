import { NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {TREEITEM} from "../../../mock/mock-TREE-ITEM";
import {TREEITEMS} from "../../../mock/mock-TREE-ITEMS";
import { IFilterTreeItem} from "../../../model/Interface/IFilterTreeItem";

// TODO create separate interface
interface FilterTreeNode {

  uuid: string;
  name: string;
  // andFT: boolean;
  // orFT: boolean;
  // notFT: boolean;
  children?: FilterTreeItem[];
}

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})

export class FilterTreeComponent implements IFilterTreeItem{

  filterItem2: FilterTreeItem[]=[{
    uuid: 'dsfda',
    name: 'sadfdfdafads',
    // andFT: true,
    // orFT: false,
    // notFT: true
  }];
  TREE_DATA_SINGLE: FilterTreeItem[]=[TREEITEM];
  TREE_DATA = TREEITEMS;

  //toggles
  isSearchShown!: boolean;
  collapsed!: boolean;

  treeControl = new NestedTreeControl<FilterTreeNode>( node => node.children);
  dataSource = new MatTreeNestedDataSource<FilterTreeNode>();

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }


  searchShow() {
    this.isSearchShown = ! this.isSearchShown;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  name: string;
  uuid: string;

}

// todo ----------------!!!!!!!!!!!
// filter tree component
// implement text search field (to search component data)
// make text search field configurable to hide it where needed
// filter tree item component
// add "AND" "OR" "NOT" buttons to the filter tree item
// TODO make model and mock data for filterItems------------!!!!!!!!!

