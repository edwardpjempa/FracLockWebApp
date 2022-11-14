import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-nav-bar',
  templateUrl: './home-page-nav-bar.component.html',
  styleUrls: ['./home-page-nav-bar.component.css']
})
export class HomePageNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logOut() {
    console.log('logout')
    localStorage.removeItem('user')
    localStorage.removeItem('device')
    sessionStorage.removeItem('user')
    window.location.href = '/'
  }
}
