import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from "../../../model/article/articleInterface";

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {


  articleList: ({
    articleTitle: string;
    articleUuid: number;
    articleMedia: string;
    articleDate: string;
 })[] = [
   {
    articleTitle: 'Title1',
    articleUuid: 1,
    articleMedia: 'MediaType1',
    articleDate: '2010-01-05T11:08:05.035Z'
   },
    {
      articleTitle: 'Title2',
      articleUuid: 2,
      articleMedia: 'MediaType2',
      articleDate: '2017-08-15T13:16:05.035Z'
    },
    {
      articleTitle: 'Title3',
      articleUuid: 3,
      articleMedia: 'MediaType3',
      articleDate: '2020-03-21T19:02:05.035Z'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
