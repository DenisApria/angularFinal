import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BookService} from "./services/book.service";
import {AuthorService} from "./services/author.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {BookDataService} from "./services/book-data.service";
import { AddBookComponent } from './add-book/add-book.component';
import {CommonModule, DatePipe} from "@angular/common";
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AddAuthorComponent } from './add-author/add-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    BookDetailsComponent,
    EditBookComponent,
    AddBookComponent,
    AuthorDetailComponent,
    AddAuthorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [BookService, AuthorService,BookDataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
