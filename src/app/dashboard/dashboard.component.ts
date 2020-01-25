import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string;

  constructor(
    private registerService: RegisterService,
    private router: Router
    ) { }

  ngOnInit() {
    if(localStorage.getItem('token') !== null){

      this.registerService.getUserName().subscribe( data => {

        console.log(data);
        this.username = data.toString();

      }, error => {
        this.router.navigate(['/login'], { state: { error: 'error logging in' } });
      })

    } else {
      this.router.navigate(['/login']);
    }
  }

  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

}
