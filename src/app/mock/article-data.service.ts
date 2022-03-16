import { Injectable } from '@angular/core';
import { ARTICLE } from "./mock-article-data";
import { Article } from "../model/article";

@Injectable({
  providedIn: 'root'
})

export class ArticleDataService {

  constructor() { }

  getArticle(): Article {
    return ARTICLE;
  }
}
