import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {Page1Component} from "./pages/Page_1_ArticleDetails/page1.component";
import {Page2Component} from "./pages/Page_2_ArticleList/page2.component";
import {Page3Component} from "./pages/Page_3_DateTimePicker/page3.component";
import {Page4Component} from "./pages/Page_4_FilterTree/page4.component";
import {Page5Component} from "./pages/Page_5_SearchBar/page5.component";

const routes: Routes = [

  // { path: 'app-datetime-picker', component: DatetimePickerComponent},
  // { path: 'app-filter-tree', component: FilterTreeComponent},
  // { path: 'app-search', component: SearchComponent},
  // { path: 'app-user-details', component: UserDetailsComponent},
  // { path: 'app-login-form', component: LoginFormComponent},

  { path: 'app-page1', component: Page1Component},
  { path: 'app-page2', component: Page2Component},
  { path: 'app-page3', component: Page3Component},
  { path: 'app-page4', component: Page4Component},
  { path: 'app-page5', component: Page5Component}
];

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
