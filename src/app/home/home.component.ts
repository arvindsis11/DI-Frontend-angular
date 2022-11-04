import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userId=sessionStorage.getItem('loggedUser');
  
  constructor(
    private route: Router,
    
   
  ) { }

  
  ngOnInit(): void {
    localStorage.getItem('loggedUser');
  }
  
  logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
