import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FineServiceService {

  constructor(
    private http : HttpClient
  ) { }

  getFine():Observable<any> {
    return this.http.get('http://localhost:8080/admin/fine')
  }
  setTfine(fine : any):Observable<any> {
    return this.http.post('http://localhost:8080/admin/fine',{finePerDay : fine})
  }
}
