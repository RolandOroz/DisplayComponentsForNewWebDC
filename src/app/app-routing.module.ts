import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ArticleDetailsComponentPage } from './model/article-details/article-details.component';
import { DatetimePickerComponentPage } from "./model/filters/datetime-picker/datetime-picker.component";
import { ArticleListItemComponent } from "./model/article-list/article-list-item/article-list-item.component";
import { FilterTreeComponent } from "./model/filters/filter-tree/filter-tree.component";
import { SearchComponent } from "./model/search/search.component";
import { UserDetailsComponent } from "./model/user-details/user-details.component";
import { LoginFormComponent } from "./model/login-form/login-form.component";

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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
