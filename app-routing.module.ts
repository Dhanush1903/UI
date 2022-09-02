import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/Components/about-us/about-us.component';
import { BooksComponent } from 'src/app/Components/books/books.component';




const routes: Routes = [{path:'book',component:BooksComponent},{path:'about',component:AboutUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
