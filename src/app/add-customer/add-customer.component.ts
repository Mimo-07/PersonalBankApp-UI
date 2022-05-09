import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customerForm!:FormGroup;
  constructor(private _builder:FormBuilder,
              private service:CustomerService,
              private dialogRef:MatDialogRef<AddCustomerComponent>) { }
  

  ngOnInit(): void {
    this.customerForm=this._builder.group({
      fullName:new FormControl("",Validators.required),
      userName:new FormControl("",Validators.required),
      phoneNumber:new FormControl("",Validators.required)
    });
  }
  AddCustomer(){
    const data={
      fullName:this.customerForm.controls['fullName'].value,
      userName:this.customerForm.controls['userName'].value,
      phoneNumber:this.customerForm.controls['phoneNumber'].value,
      dateOfJoining:""
    }
    this.service.AddCustomer(data).subscribe(res=>{
      alert("Successfully added");
      this.dialogRef.close(data);
    },err=>{
      alert("Error");
      console.log(err);
    })
    
  }

}
