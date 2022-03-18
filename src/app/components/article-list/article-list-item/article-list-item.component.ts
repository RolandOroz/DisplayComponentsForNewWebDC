import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css'],
  providers: [ DatePipe]
})
export class ArticleListItemComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

}
