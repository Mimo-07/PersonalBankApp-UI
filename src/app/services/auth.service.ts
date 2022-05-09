import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  GetToken(){
    return localStorage.getItem('jwt')||'';
  }
}
