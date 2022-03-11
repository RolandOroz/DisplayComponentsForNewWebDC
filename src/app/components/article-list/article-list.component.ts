import { Component, OnInit } from '@angular/core';
import { Article } from "../article/article";



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
