import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

import {FilterTreeItem} from "../../model/FilterTreeItem";

@Component({
  selector: 'app-filterTreeItem',
  templateUrl: './FilterTreeItem.component.html',
  styleUrls: ['./FilterTreeItem.component.css']
})
export class FilterTreeItemComponent implements OnInit {

  @Input() item?: FilterTreeItem;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit(): void {
  }

}
