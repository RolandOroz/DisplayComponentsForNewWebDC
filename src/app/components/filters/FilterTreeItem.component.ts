import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

import {FilterTreeItem} from "../../model/FilterTreeItem";

@Component({
  selector: 'app-filterTreeItem',
  templateUrl: './FilterTreeItem.component.html',
  styleUrls: ['./FilterTreeItem.component.css']
})
export class FilterTreeItemComponent {

  @Input() item?: FilterTreeItem;
  @Input() items?: FilterTreeItem[];

  constructor() { }


}
