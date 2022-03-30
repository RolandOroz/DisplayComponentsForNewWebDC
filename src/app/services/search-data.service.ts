import { Injectable } from '@angular/core';
import { ArticleInterface } from "../model/Interface/articleInterface";
import {Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  searchOption: any=[];

  postUrl : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getArticles(): Observable<ArticleInterface[]>{
    return this.http.get<ArticleInterface[]>(this.postUrl);
  }
}
