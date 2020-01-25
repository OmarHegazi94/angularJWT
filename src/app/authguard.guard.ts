import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('token') !== null) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }





}
