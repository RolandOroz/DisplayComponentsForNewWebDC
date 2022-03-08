import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleDetailsComponentPage } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list/article-list-item/article-list-item.component';
import { FiltersComponent } from './filters/filters.component';
import { DatetimePickerComponentPage } from './filters/datetime-picker/datetime-picker.component';
import { FilterTreeComponent } from './filters/filter-tree/filter-tree.component';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './view/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponentPage,
    ArticleListComponent,
    ArticleListItemComponent,
    FiltersComponent,
    DatetimePickerComponentPage,
    FilterTreeComponent,
    SearchComponent,
    UserDetailsComponent,
    LoginFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'article-details', component: ArticleDetailsComponentPage},
    ]),
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
