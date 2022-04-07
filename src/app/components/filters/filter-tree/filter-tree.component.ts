import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
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
  TREE_DATA: FilterTreeItem[]= [];
  isShown!: boolean;
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
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void {

    }

  hasChild = (_: number, node: FilterFlatNode) => node.expandable;


  searchShow() {
    this.isShown = ! this.isShown;
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }


  drawerToggle() {

  }
}

// todo ----------------!!!!!!!!!!!
// filter tree component
// implement text search field (to search component data)
// make text search field configurable to hide it where needed
// filter tree item component
// add "AND" "OR" "NOT" buttons to the filter tree item
// TODO make model and mock data for filterItems------------!!!!!!!!!
// filterTree: IFilterTreeItem= {
//   uuid: "a12",
//   name: "abc"
// };
//
// filterTree_2: IFilterTreeItem= {
//   uuid: "b34",
//   name: "def"
// };
//
// filterTreeItems = [] = [this.filterTree, this.filterTree_2];
//
// drawerToggle() {
//
// }
