import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {AuthorComponent} from "./author/author.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {AuthorDetailComponent} from "./author-detail/author-detail.component";
import {AddAuthorComponent} from "./add-author/add-author.component";
import { DeactivateGuard } from './guards/deactivate-guard.guard';

const routes: Routes = [

  { path: 'books/edit', component: EditBookComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'authors/add', component: AddAuthorComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books', component: BookComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard] },


  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
