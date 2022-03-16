import {Component, OnInit} from '@angular/core';
import {ArticlesDataService} from "../../mock/articles-data.service";
import {Article} from "../../model/article";


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ ArticlesDataService ]
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private dataService: ArticlesDataService) {
  }

  ngOnInit(): void {
    this.articles = this.dataService.getArticles();
  }

}
