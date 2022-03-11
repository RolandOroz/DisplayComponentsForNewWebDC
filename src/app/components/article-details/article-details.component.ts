import { Component, OnInit } from '@angular/core';
import { Article } from "../article/article";
import { ArticleListItemComponent} from "../article-list/article-list-item/article-list-item.component";



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponentPage implements OnInit {

  article: Article =   {
    articleUuid: 1,
    articleTitle: 'Some Article Title',
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
    articleLink: 'https://link@some.com',
    }

  constructor() { }

  ngOnInit(): void {
  }

}

