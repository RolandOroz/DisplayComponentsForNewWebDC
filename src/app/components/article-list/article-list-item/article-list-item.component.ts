import { Component, OnInit } from '@angular/core';
import { Article } from "../../article/article";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  article: Article = {
    articleUuid: 1,
    articleTitle: 'Test Title of Article',
    articleDate: "06-10-2022",
    articleTopic: 'Topic',
    articleTag: 'Tag',
    articleCustomTopic: 'Custom Topic',
    articleMediaType: 'Media Type',
    articleSubMedia: 'Sub Media',
    articleCountry: 'Country',
    articleMedia: 'Media',
    articleRubric: 'Rubric',
    articleAuthor: 'Author',
    articleSentiment: 'Sentiment',
    articleGenre: 'Genre',
    articleLink: 'https://v2.angular.io/docs/ts/latest/tutorial/toh-pt2.html',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
