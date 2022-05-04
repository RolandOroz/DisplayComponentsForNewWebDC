import {Component} from '@angular/core';
import {Article} from "../../model/article";
import {ArticleDataService} from "../../mock/article-data.service";


@Component({
  selector: 'cpmt-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [ArticleDataService]
})
export class ArticleDetailsComponentPage {

  article: Article;

  constructor(private dataService: ArticleDataService) {
     this.article = this.dataService.getArticle()
  }
}

