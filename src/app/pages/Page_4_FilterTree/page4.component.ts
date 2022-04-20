import {Component, Input, OnInit} from '@angular/core';
import {FilterTreeItem} from "../../model/FilterTreeItem";

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  @Input() items: FilterTreeItem[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
