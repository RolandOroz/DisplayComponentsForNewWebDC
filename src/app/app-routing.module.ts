import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";
import {Page3Component} from "./pages/page3/page3.component";
import {Page4Component} from "./pages/page4/page4.component";
import {Page5Component} from "./pages/page5/page5.component";

const routes: Routes = [

  // { path: 'app-datetime-picker', component: DatetimePickerComponentPage},
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
