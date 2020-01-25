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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(){
    console.log(this.loginForm.value);
    this.registerService.login(this.loginForm.value).subscribe(data => {
      
      console.log(data);

      if(data.token && data.Username) {

        this.responseObj = data;
        localStorage.setItem('token', data.token.toString());
        this.router.navigate(['./dashboard']);

      } else if(data.message) {
        this.responseObj = data.message;
      }

    }, error => console.log(error));
  }

}
