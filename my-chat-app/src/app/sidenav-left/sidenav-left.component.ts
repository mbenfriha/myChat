import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../common/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav-left',
  templateUrl: 'sidenav-left.component.html'
})
export class SideNavLeftComponent implements OnInit{
  connected: User;
  friends : User[];
  constructor(
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit(){
    this.connected = this.getUser();
    this.connected.friends.forEach((frd) => {
      this.userService.getUserByPseudo(frd).subscribe((user) => {
        this.friends.push(user);
      });
    });
  }
  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('profil'));
  }

  talkTo(friend: string){
    this.router.navigate([`/home/${friend}`]);
  }
  
}
