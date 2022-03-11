import { Component, OnInit } from '@angular/core';
import { Article } from "../article/article";


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponentPage implements OnInit {

  article: Article =   {
    articleUuid: 1,
    articleTitle: 'Some Article Title',
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

