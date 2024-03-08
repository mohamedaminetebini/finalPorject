import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/admin/category'
  constructor(
    private http : HttpClient
  ) { }

  addCategory(category : any):Observable<any> {
    return this.http.post(this.baseUrl,category)
  }
  getCategories():Observable<any> {
    return this.http.get(this.baseUrl)
  }
}
