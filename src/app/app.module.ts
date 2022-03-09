import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleDetailsComponentPage } from './model/article-details/article-details.component';
import { ArticleListComponent } from './model/article-list/article-list.component';
import { ArticleListItemComponent } from './model/article-list/article-list-item/article-list-item.component';
import { FiltersComponent } from './model/filters/filters.component';
import { DatetimePickerComponentPage } from './model/filters/datetime-picker/datetime-picker.component';
import { FilterTreeComponent } from './model/filters/filter-tree/filter-tree.component';
import { SearchComponent } from './model/search/search.component';
import { UserDetailsComponent } from './model/user-details/user-details.component';
import { LoginFormComponent } from './model/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './model/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";



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
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
