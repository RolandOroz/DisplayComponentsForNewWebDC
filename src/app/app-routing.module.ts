import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleDetailsComponentPage} from './article-details/article-details.component';
import { DatetimePickerComponentPage } from "./filters/datetime-picker/datetime-picker.component";
import {ArticleListItemComponent} from "./article-list/article-list-item/article-list-item.component";
import {FilterTreeComponent} from "./filters/filter-tree/filter-tree.component";
import {SearchComponent} from "./search/search.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {LoginFormComponent} from "./login-form/login-form.component";

const routes: Routes = [
  { path: 'article-details', component: ArticleDetailsComponentPage },
  { path: 'app-article-list-item', component: ArticleListItemComponent},
  { path: 'app-datetime-picker', component: DatetimePickerComponentPage},
  { path: 'app-filter-tree', component: FilterTreeComponent},
  { path: 'app-search', component: SearchComponent},
  { path: 'app-user-details', component: UserDetailsComponent},
  { path: 'app-login-form', component: LoginFormComponent}
];

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
