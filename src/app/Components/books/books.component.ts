import { Component, OnInit } from '@angular/core';
import Book from 'Entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book:Book=new Book();
 
  save(){
    const observable= this.bookService.createBook(this.book);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again!")
      }
    )
      
  
  }

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
  }

}