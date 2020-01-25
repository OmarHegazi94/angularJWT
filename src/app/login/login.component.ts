import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseObj:object;

  constructor(
    private registerService:RegisterService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  login(){
    console.log(this.loginForm.value);
    this.registerService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      this.responseObj = data;
      localStorage.setItem('token', data.toString());
      this.router.navigate(['./dashboard']);
    }, error => console.log(error));
  }

}
