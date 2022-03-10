import { Component, OnInit } from '@angular/core';
import { Article } from "../../article/article";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  article: Article =   {
    articleUuid: 1,
    articleTitle: 'Test Title of Article',
    articleDate: '20-10-2020',
    articleTopic: 'Topic',
    articleCustomTopic: 'Custom Topic',
    articleMediaType: 'Media Type',
    articleSubMedia: 'Sub Media',
    articleCountry: 'Country',
    articleMedia: 'Media',
    articleRubric: 'Rubric',
    articleAuthor: 'Author',
    articleSentiment: 'Sentiment',
    articleGenre: 'Genre'}

  constructor() { }

  ngOnInit(): void {
  }

}
