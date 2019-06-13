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
  friends : User[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    if(this.router.url.includes('home')){
      this.ngOnInit();
    }
  }

  ngOnInit(){
    console.log(this.connected);
    this.connected = this.getUser();
    this.connected.friends.forEach((frd) => {
      this.userService.getUserByPseudo(frd).subscribe((user) => {
       
        this.friends.push(user);
      },(err) => {
        console.log('Conpemsation erreur')
        
          let f = new User();
          f.name = frd;
          this.friends.push(f);
      });
    });
  }
  getUser(): User {
    let user = new User();
    user.name = localStorage.getItem('user');
    return user;
  }

  talkTo(friend: string){
    this.router.navigate([`/home/${friend}`]);
  }
  
  toEdit(){
    this.router.navigate(['/edit']);
  }

  search(){
    this.router.navigate(['/search']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
