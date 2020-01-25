import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;

  constructor(
    private registerService: RegisterService,
    // private router: Router
  ) { }

  ngOnInit() {

    this.registerService.getUserName().subscribe(data => {
      console.log(data);
      this.username = data.toString();
    }, error => {
      console.log(error);
    })


  }

  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

}
