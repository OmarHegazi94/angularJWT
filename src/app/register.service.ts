import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    // private router: Router
  ) { }

  commonUrl: string = 'http://localhost:8080/users/';

  submitRegisterForm(jsonBody) {
    return this.http.post(this.commonUrl + 'register', jsonBody);
  }

  login(jsonBody) {
    return this.http.post(this.commonUrl + 'login', jsonBody);
  }

  // gets the username from the token
  getUserName() {
    return this.http.get(this.commonUrl + 'username', {
      params: new HttpParams().append('token', localStorage.getItem('token'))
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // InjectUsername() {
  //   // if token => get the username
  //   // if not => back to login

  //   if (localStorage.getItem('token') !== null) {

  //     return this.getUserName();

  //   } else {
  //     return this.router.navigate(['/login']);
  //   }

  // }

  // .subscribe( data => {
  //   console.log(data);

  //   this.username = data.toString();
  // }


}

