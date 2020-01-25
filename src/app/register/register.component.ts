import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:string;

  constructor(
    private registerService:RegisterService,
    private router: Router) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  register(){
    console.log(this.registerForm.value);
    this.registerService.submitRegisterForm(this.registerForm.value).subscribe((data) => { 
      this.message = 'Register Success'
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000)
     }, error => this.message = error
    )
  }

}
