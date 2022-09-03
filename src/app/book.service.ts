import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL="http://localhost:8083/book"
const URLGET="http://localhost:8083/allBooks"

const URLLOGIN="http://localhost:8088/login"


@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(){
    return this.http.get(URLGET)
  }

  searchBooks(){
    return this.http.get(`http://localhost:8083/searchbooks?category{category}&authorName={authorName}&price={price}`)
  }

  
  
 
 createBook(books:{   title:string;
  category:string;
  image:string;
  price:number;
  publisher:string;
  active:boolean;
  content:string;
  

  }){
    return this.http.post(URL, books)

  }

  authorlogin(author:{ 
    email:string;
    password:string;
    
  
    }){
      return this.http.post(URLLOGIN, author)
  
    }

  constructor(public http:HttpClient) { }
}
