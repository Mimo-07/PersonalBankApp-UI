import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { RegisterLoginService } from '../services/register-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: any;
  constructor(private dialog: MatDialog,
    private _builder: FormBuilder,
    private service: RegisterLoginService,
    private router: Router) 
    {
      this.LoginForm = this._builder.group({
        userName: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        role: new FormControl("", Validators.required)
    });
  }
  ngOnInit(){
  }

  Login() {
    const data =
    {
      username: this.LoginForm.controls['userName'].value,
      password: this.LoginForm.controls['password'].value,
      role: this.LoginForm.controls['role'].value
    }
    console.log(data);
    this.service.Login(data).subscribe(res => {
      if (res != null) {
        localStorage.setItem('jwt', res);
        this.router.navigateByUrl('home');
        
      }

    },err=>{
      alert(err.error);
    });

  }

  OpenRegister() {
    const dialogRef = this.dialog.open(RegisterComponent,
      {
        width: "1160px",
        height: "auto",
      })
  }



}
