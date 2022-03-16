import { Injectable } from '@angular/core';
import { ARTICLES } from "./mock-articles-data";
import { Article } from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticlesDataService {

  constructor() { }
  getArticles(): Article[] {
    return ARTICLES;
  }
}
