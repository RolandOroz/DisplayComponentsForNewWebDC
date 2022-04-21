import {Component, Input, OnInit} from '@angular/core';

import {FilterTreeItem} from "../../model/FilterTreeItem";

@Component({
  selector: 'app-filterTreeItem',
  templateUrl: './FilterTreeItem.component.html',
  styleUrls: ['./FilterTreeItem.component.css']
})
export class FilterTreeItemComponent implements OnInit {

  @Input() item?: FilterTreeItem;

  constructor() { }



  ngOnInit(): void {
  }

}
