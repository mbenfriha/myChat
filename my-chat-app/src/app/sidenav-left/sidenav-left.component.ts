import { Component } from '@angular/core';

@Component({
  selector: 'sidenav-left',
  templateUrl: 'sidenav-left.component.html'
})
export class SideNavLeftComponent {
  constructor() {}

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }
  
}
