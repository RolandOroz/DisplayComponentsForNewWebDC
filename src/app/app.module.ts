import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleDetailsComponentPage } from './components/article-details/article-details.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleListItemComponent } from './components/article-list/article-list-item/article-list-item.component';
import { FilterTreeItemComponent } from './components/filters/FilterTreeItem.component';
import { DatetimePickerComponent } from './components/filters/datetime-picker/datetime-picker.component';
import { FilterTreeComponent } from './components/filters/filter-tree/filter-tree.component';
import { SearchComponent } from './components/search/search.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './pages/Page_0_Home/home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { SearchDataService} from "./services/search-data.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { Page1Component } from './pages/Page_1_ArticleDetails/page1.component';
import { Page2Component } from './pages/Page_2_ArticleList/page2.component';
import { Page3Component } from './pages/Page_3_DateTimePicker/page3.component';
import { Page4Component } from './pages/Page_4_FilterTree/page4.component';
import { Page5Component } from './pages/Page_5_SearchBar/page5.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import { TopicsComponent } from './components/filters/topics/topics.component';
import {MatTreeModule} from "@angular/material/tree";





@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponentPage,
    ArticleListComponent,
    ArticleListItemComponent,
    FilterTreeItemComponent,
    DatetimePickerComponent,
    FilterTreeComponent,
    SearchComponent,
    UserDetailsComponent,
    LoginFormComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    TopicsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'app-home', component: HomeComponent},
      // { path: 'app-page1', component: Page1Component },
      // { path: 'app-page2', component: Page2Component },
      // { path: 'app-page3', component: Page3Component }
    ]),
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatRippleModule,
    MatTreeModule


  ],
  exports: [
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {


  ngOnInit(): void { }
}
