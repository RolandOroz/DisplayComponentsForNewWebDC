import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from "../../model/article/articleInterface";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponentPage implements OnInit {

  article: ArticleInterface =   {
    articleUuid: 1,
    articleTitle: 'Some ArticleInterface Title',
    articleMedia: 'Media',
    articleAuthor: 'Author',
    articleTopic: 'Topic',
    articleTag: 'Tag',
    articleDate: '20-10-2020',
    articleCustomTopic: 'Custom Topic',
    articleMediaType: 'Media Type',
    articleSubMedia: 'Sub Media',
    articleCountry: 'Country',
    articleRubric: 'Rubric',
    articleSentiment: 'Sentiment',
    articleGenre: 'Genre',
    articleLink: 'https://jasonwatmore.com/post/2020/09/01/angular-master-details-crud-example',
    }

  constructor() { }

  ngOnInit(): void {
  }

}

