import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor() { }

  collapsed!: boolean;
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
  }

}
