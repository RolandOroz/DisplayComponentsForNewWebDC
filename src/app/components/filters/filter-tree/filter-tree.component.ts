import { Component } from '@angular/core';
import { IFilterTreeItem } from "../../../model/Interface/IFilterTreeItem";

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})

export class FilterTreeComponent {

 // TODO make model and mock data for filterItems------------!!!!!!!!!
  filterTree: IFilterTreeItem= {
    uuid: "a12",
    name: "abc"
  };

  filterTree_2: IFilterTreeItem= {
    uuid: "b34",
    name: "def"
  };

  filterTreeItems = [] = [this.filterTree, this.filterTree_2];

}

// todo ----------------!!!!!!!!!!!
// filter tree component
// implement text search field (to search component data)
// make text search field configurable to hide it where needed
// filter tree item component
// add "AND" "OR" "NOT" buttons to the filter tree item
