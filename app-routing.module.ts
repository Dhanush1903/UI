import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/Components/about-us/about-us.component';
import { BooksComponent } from 'src/app/Components/books/books.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { SearchResultsComponent } from 'src/app/Components/search-results/search-results.component';




const routes: Routes = [{path:'book',component:BooksComponent},
{path:'about',component:AboutUsComponent},
{path:'',component:HomeComponent},
{path:'searchResults',component:SearchResultsComponent},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
