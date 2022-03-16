import {Component, OnInit} from '@angular/core';
import {Article} from "../../model/article";
import {ArticleDataService} from "../../mock/article-data.service";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  providers: [ArticleDataService]
})
export class ArticleDetailsComponentPage implements OnInit{

  article!: Article;

  constructor(private dataService: ArticleDataService) { }

  ngOnInit(): void {
     this.article = this.dataService.getArticle()
  }
}

