import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ViewCourseComponent } from './view-course/view-course.component';
import { SearchCourseComponent } from './search-course/search-course.component'

const myRoute:Routes=[
  {
    path:"",
    component:AddCourseComponent
  },
  {
    path:"view",
    component:ViewCourseComponent
  },
  {
    path:"search",
    component:SearchCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddCourseComponent,
    ViewCourseComponent,
    SearchCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
