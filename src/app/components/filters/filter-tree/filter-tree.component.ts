import { Component } from '@angular/core';
import { IFilterTreeItem } from "../../../model/Interface/IFilterTreeItem";

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css']
})

export class FilterTreeComponent {

  filterTree: IFilterTreeItem= {
    uuid: "",
    name: ""
  };

  filterTreeItems= [] = [];

}

// filter tree component
// implement text search field (to search component data)
// make text search field configurable to hide it where needed
// filter tree item component
// add "AND" "OR" "NOT" buttons to the filter tree item
