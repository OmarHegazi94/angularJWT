import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  commonUrl:string = 'http://localhost:8080/users/';

  submitRegisterForm(jsonBody){
    return this.http.post(this.commonUrl+'register', jsonBody);
  }

  login(jsonBody) {
    return this.http.post(this.commonUrl+'login', jsonBody);
  }

  getUserName(){
    return this.http.get(this.commonUrl+'username', {
      params: new HttpParams().append('token', localStorage.getItem('token'))
      
    })
    // console.log(localStorage.getItem('token'))
  }


}
