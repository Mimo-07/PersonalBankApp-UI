import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource!:MatTableDataSource<any>;
  showTable:boolean=false;
  apiResponse:any;
  showData!:any;
  isDisabled!:boolean;
  displayedColumns=['fullName','username','dateOfJoining','phoneNumber']

  constructor(private router:Router,
              private service:CustomerService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem('jwt')!=''){
      var _extractedToken=(localStorage.getItem('jwt')||'').split('.')[1];
      var atobData=atob(_extractedToken);
      var finalData=JSON.parse(atobData);
      this.showData=finalData;
      console.log(finalData.unique_name);
      if(finalData.role=='admin'){
        this.isDisabled=false;
      }else {
        this.isDisabled=true;
      }
    }
    }

  Logout(){
    localStorage.clear();
    this.router.navigate([""])
  }

  getCustomer(){
    this.service.getCustomers().subscribe(res=>{
      this.apiResponse=res;
      this.showTable=true;
      this.dataSource=new MatTableDataSource(this.apiResponse);
    });
  }
  addCustomer(){
    this.dialog.open(AddCustomerComponent,{
      width:"auto",
      height:"auto"
    }).afterClosed().subscribe(res=>{
      if(res!=null)
      {
        this.getCustomer();
      }
    });
  }

}
