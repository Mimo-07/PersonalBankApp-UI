import { Injectable } from '@angular/core';
import { CanActivate, Router  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    if(localStorage.getItem('jwt'))
    {
      return true;
    }
    else
    {
      this.router.navigate([""]);
      return false;
    }
  }
  
}
