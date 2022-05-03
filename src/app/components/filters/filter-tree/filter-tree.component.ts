import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {FilterTreeItem} from "../../../model/FilterTreeItem";
import {SFilterItemService} from "../../../services/sfilter-item.service";
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
export class FilterTreeComponent implements OnInit, OnChanges {

  @Input() items: FilterTreeItem;
  @Input() itemsSearch: FilterTreeItem;

  name: string;
  uuid: string;

  filterItem!: FilterTreeItem[];
  originalData =  TREEITEMS;


  searchText: string = '';
  newVal: string;



//toggles
  isSearchShown!: boolean;
  collapsed!: boolean;

  treeControl = new NestedTreeControl<FilterTreeNode>( node => node.children);
  dataSource = new MatTreeNestedDataSource<FilterTreeNode>();


  constructor() {
  }

  searchShow() {
    this.isSearchShown = ! this.isSearchShown;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit() {
    this.dataSource.data = this.originalData;

  }

  onSearchEvent(evt: any) {
  let temp: string;
  temp = evt.target.value;
  this.searchText = temp;
    this.originalData.filter(val => {
      return val.name.toString().toLowerCase().startsWith(this.searchText);
    });

  }
}



