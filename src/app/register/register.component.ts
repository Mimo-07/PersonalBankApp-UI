import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { fromEventPattern } from 'rxjs';
import { RegisterLoginService } from '../services/register-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  builder:FormBuilder;
  RegisterForm!:FormGroup;
  initializeForm(){
  this.RegisterForm=this._builder.group({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
    role:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    fullName:new FormControl("",Validators.required)
  });
}

  constructor(private _builder:FormBuilder,
              private service:RegisterLoginService,
              private dialogRef:MatDialogRef<RegisterComponent>) { 
    this.builder=_builder;
    this.initializeForm();   
  }

  ngOnInit(): void {
  }
  
  Register(){
    const data=
    {
      username:this.RegisterForm.controls["username"].value,
      password:this.RegisterForm.controls["password"].value,
      role:this.RegisterForm.controls["role"].value,
      fullName:this.RegisterForm.controls["fullName"].value,
      phoneNumber:this.RegisterForm.controls['phone'].value
    }
    console.log(data);


    this.service.Register(data).subscribe(res=>
      {
        if(res!=null)
        {
          console.log(res);
          alert("Successfully registered");
        }
      },err=>{
        alert(err.error);
      })
  }

}
