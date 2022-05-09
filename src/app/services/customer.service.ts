import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  apiBaseurl="http://localhost:2314";

  getCustomers(){
    const url=this.apiBaseurl+"/Customer"
    return this.http.get(url);
  }
  
  AddCustomer(data:any){
    const url=this.apiBaseurl+"/Customer"
    return this.http.post(url,data)
  }
}
