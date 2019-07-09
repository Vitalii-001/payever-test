import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService, CoreModule, PaginationApiService } from '../modules/core';
import { UsersListModule } from '../modules/users-list';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    UsersListModule,
  ],
  providers: [
    ApiService,
    PaginationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
