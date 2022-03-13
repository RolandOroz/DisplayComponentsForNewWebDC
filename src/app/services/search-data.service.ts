import { Injectable } from '@angular/core';
import { Article } from "../components/article/article";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  searchOption=[]
  //public articlesData: Article[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.postUrl);
  }
}
