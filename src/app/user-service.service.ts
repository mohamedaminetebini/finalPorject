import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './types/userType';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http : HttpClient
  ) { }

  getUsers():Observable<any> {
    return this.http.get('http://localhost:8080/admin/user')
  }

  modifyStatus(user : User):Observable<any> {
    return this.http.put('http://localhost:8080/admin/user',{username : user.username})
  }
  getTotalUsers():Observable<any> {
    return this.http.get('http://localhost:8080/admin/user/total')
  }
}
