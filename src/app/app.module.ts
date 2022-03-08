import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list/article-list-item/article-list-item.component';
import { FiltersComponent } from './filters/filters.component';
import { DatetimePickerComponent } from './filters/datetime-picker/datetime-picker.component';
import { FilterTreeComponent } from './filters/filter-tree/filter-tree.component';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    FiltersComponent,
    DatetimePickerComponent,
    FilterTreeComponent,
    SearchComponent,
    UserDetailsComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
