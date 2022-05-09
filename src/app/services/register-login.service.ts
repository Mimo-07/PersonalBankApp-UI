import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  apiUrl="http://localhost:2314";

  constructor(private http:HttpClient) { }

  Register(usercred:any){
    return this.http.post(this.apiUrl+"/Register/Register",usercred)
  }

  Login(usercred:any){
    return this.http.post(this.apiUrl+"/JWT/Authenticate",usercred,{responseType:'text'})
  }

}
