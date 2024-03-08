import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, IssuedBook } from './types/bookType';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

    baseUrl = 'http://localhost:8080/admin/book';
    issueUrl = 'http://localhost:8080/admin/issue';
  constructor(
    private http : HttpClient
  ) { }

  addBook(book : Book):Observable<any> {
    return this.http.post(this.baseUrl,book)
  }
  getTotalBooks():Observable<any> {
    return this.http.get(this.baseUrl+'/total')
  }

  searchBooks(search : string):Observable<any> {
    return this.http.get(this.baseUrl+"/"+search)
  }
  issueBook(book :any):Observable<any> {
    return this.http.post(this.issueUrl,book)
  }
  getIssuedBooks():Observable<HttpResponse<any>> {
    return this.http.get(this.issueUrl,{observe:'response'})
  }
  updateIssueReturn(issueId : any):Observable<any> {
    return this.http.put(this.issueUrl+"/"+issueId,{})
  }
  getNonIssuedBooks():Observable<HttpResponse<any>> {
    return this.http.get(this.issueUrl+"/not",{observe:'response'})
  }
  IssueBook(book :IssuedBook):Observable<any> {
    return this.http.put(this.issueUrl+"/give/"+book.issuedBookId,{})
  }
  getTotalReturnedBooks():Observable<any> {
    return this.http.get(this.issueUrl+"/returned/total")
  }
  getTotalIssuedBooks():Observable<any> {
    return this.http.get(this.issueUrl+"/issued/total")
  }
  getTotalCategories():Observable<any> {
    return this.http.get("http://localhost:8080/admin/category/total")
  }
}
