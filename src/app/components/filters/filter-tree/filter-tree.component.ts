import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {SFilterItemService} from "../../../services/sfilter-item.service";
import {SFilterItemsService} from "../../../services/sfilter-items.service";
import {TREEITEMS} from "../../../mock/mock-TREE-ITEMS";
import {TREEITEM} from "../../../mock/mock-TREE-ITEM";


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
  styleUrls: ['./filter-tree.component.css'],
  providers: [ SFilterItemService],
})

export class FilterTreeComponent implements OnChanges {

  @Input() items: FilterTreeItem;

  name: string;
  uuid: string;

  filterItem!: FilterTreeItem[];

  public filterTreeItemArray= TREEITEMS;
  searchText: string;

  TREE_DATA = this.filterItem = this.dataService.getFilterTreeItems();



//toggles
  isSearchShown!: boolean;
  collapsed!: boolean;

  treeControl = new NestedTreeControl<FilterTreeNode>( node => node.children);
  dataSource = new MatTreeNestedDataSource<FilterTreeNode>();

  constructor(private dataService: SFilterItemsService) {
     this.dataSource.data = this.TREE_DATA;
  }

//TODO create onChange   ------------------------------------------------------------!!!!1
  ngOnChanges(changes: SimpleChanges) {
    const inputValue = changes['items'];

    console.log(inputValue);
  }

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


