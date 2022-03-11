import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ArticleDetailsComponentPage } from './components/article-details/article-details.component';
import { DatetimePickerComponentPage } from "./components/filters/datetime-picker/datetime-picker.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { FilterTreeComponent } from "./components/filters/filter-tree/filter-tree.component";
import { SearchComponent } from "./components/search/search.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { ArticleListItemComponent } from "./components/article-list/article-list-item/article-list-item.component";

const routes: Routes = [
  { path: 'article-details', component: ArticleDetailsComponentPage },
  { path: 'app-article-list-item', component: ArticleListItemComponent},
  { path: 'app-datetime-picker', component: DatetimePickerComponentPage},
  { path: 'app-filter-tree', component: FilterTreeComponent},
  { path: 'app-search', component: SearchComponent},
  { path: 'app-user-details', component: UserDetailsComponent},
  { path: 'app-login-form', component: LoginFormComponent},
  { path: 'app-article-list', component: ArticleListComponent}
];

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
