import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = 'http://localhost:3000';
   
  constructor(private _http: HttpClient) { }

  addUser(payload:any) : Observable<any>{
    return this._http.post(`${this.url}/api/signup/addUser`,payload);
  }

  userLogin(payload:any) : Observable<any>{
    return this._http.post(`${this.url}/api/login/userLogin`,payload);
  }
}
