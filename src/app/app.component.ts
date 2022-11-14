import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public appTitle = 'FracLockWebApp';
  public notDevicePage = false;

  showMainNavBar() {
    return (
      localStorage.getItem('user')
    );
  }

  showNavBar() {
    return (
      localStorage.getItem('user') &&
      window.location.pathname != '/' &&
      window.location.pathname != '/userList' &&
      window.location.pathname != '/addUser'
    );
  }
}
