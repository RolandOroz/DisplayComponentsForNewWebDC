import {NestedTreeControl} from '@angular/cdk/tree';
import { Component, Injectable, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {SFilterItemService} from "../../../services/sfilter-item.service";
import {SFilterItemsService} from "../../../services/sfilter-items.service";
import {TREEITEMS} from "../../../mock/mock-TREE-ITEMS";



// TODO create separate interface
interface FilterTreeNode {
  uuid: string;
  name: string;
  children?: FilterTreeItem[];
}

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.css'],
  providers: [ SFilterItemService],
})

@Injectable()
export class FilterTreeComponent implements OnChanges {

  @Input() items: FilterTreeItem;
  @Input() itemsSearch: FilterTreeItem;

  name: string;
  uuid: string;

  filterItem!: FilterTreeItem[];

// show search
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

  searchShow() {
    this.isSearchShown = ! this.isSearchShown;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}



