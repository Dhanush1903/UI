import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL="http://localhost:8083/book"
const URLGET=""

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getUsers(){
    return this.http.get(URL)
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

  constructor(public http:HttpClient) { }
}
