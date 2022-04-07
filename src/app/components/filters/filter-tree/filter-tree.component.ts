import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {IFilterTreeItem} from "../../../model/Interface/IFilterTreeItem";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})

export class FilterTreeComponent {
  isShown!: boolean;
  collapsed!: boolean;
 // TODO make model and mock data for filterItems------------!!!!!!!!!
  filterTree: IFilterTreeItem= {
    uuid: "a12",
    name: "abc"
  };

  filterTree_2: IFilterTreeItem= {
    uuid: "b34",
    name: "def"
  };
  searchShow() {
    this.isShown = ! this.isShown;
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  filterTreeItems = [] = [this.filterTree, this.filterTree_2];

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
