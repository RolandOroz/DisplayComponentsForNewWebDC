import { Injectable } from '@angular/core';
import { ArticleInterface } from "../model/article/articleInterface";
import {Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";
// import {DatetimePickerComponentPage} from "../components/filters/datetime-picker/datetime-picker.component";

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  searchOption=[]
  //public articlesData: ArticleInterface[]
  postUrl : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getArticles(): Observable<ArticleInterface[]>{
    return this.http.get<ArticleInterface[]>(this.postUrl);
  }
}
