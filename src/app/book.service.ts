import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Book from 'Entity/Book';


const URL="http://localhost:8083/book"
const URLGET="http://localhost:8083/allBooks"

const URLLOGIN="http://localhost:8088/login" 


@Injectable({
  providedIn: 'root'
})
export class BookService {
  book:Book=new Book();
  

  getBooks(){
    return this.http.get(URLGET)
  }

  searchBooks(authorName:any,publisher:any,category:any,price:any){
    return this.http.get("	http://localhost:8083/searchBy/"+authorName+'/'+publisher+'/'+category+'/'+price);
  }

//   getbyparams(): Observable<any>{
// let params1= new HttpParams().set('category',this.category);
// let params2= new HttpParams().set('authorName','mars');
// let params3= new HttpParams().set('price','1390');
// // let params2= new HttpParams().set('AuthorName','mystery');
// return this.http.get("http://localhost:8083/searchbooks",{params:params1})
//   }

  
  
 
 createBook(books:{   title:string;
  category:string;
  image:string;
  price:number;
  publisher:string;
  active:boolean;
  content:string;
  email:string;
  authorName:string;
  

  }){
    return this.http.post(URL, books)

  }

  authorlogin(author:{ 
    email:string;
    password:string;
    
  
    }){
      return this.http.post(URLLOGIN, author)
  
    }

    retrieveAllByEmail(email:string){
      return this.http.get(`http://localhost:8083/getbookbyemail/${email}`)

    }

updateBook(id:number, books:{   title:string;
  category:string;
  image:string;
  price:number;
  publisher:string;
  active:boolean;
  content:string;
  
  

  }){
  return this.http.put(`http://localhost:8083/update/${id}`,books)


}

deleteBook(id:number){
  return this.http.delete(`http://localhost:8083/book/${id}`);
}

createAuthor( authors:{  
  email:string;
  authorName:string;
  password:string;
  
 

  }      )      {
    return this.http.post(`http://localhost:8088/author`, authors)

}




  constructor(public http:HttpClient) { }
}


