import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { Nav } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { E404Component } from './error/404/e404.component';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    Nav,
    E404Component,
  ],
  imports: [
    CourseModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: E404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
