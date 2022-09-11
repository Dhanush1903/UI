import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  book:Book=new Book();
  books:Book[]=[];
  category='';
  authorName='';
  price=0;
  publisher='';


  constructor(public bookService:BookService,
    private activatedroute: ActivatedRoute) {
      this.activatedroute.queryParams.subscribe(data=>{
       
       this.category= data.category;
       this.authorName= data.authorName;
       this.price= data.price;
      })
     }

  ngOnInit(): void { 
    
    
  //   const promise=this.bookService.getBooks();
  //   promise.subscribe((response)=>{
  //     console.log(response);
  //     this.books=response as Book[];
  // })

//  searchbyparams(){
//   const promise=this.bookService.getbyparams();
//   promise.subscribe((response)=>{
//         console.log(response);
//         this.books=response as Book[];
//     })}

}


}
