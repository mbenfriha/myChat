import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-app.component.html',
})
export class LoginAppComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router,
    public userServ: UserService,
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    this.userServ.login(this.model.username).subscribe((user) =>{
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);  
    },(err)=>{
      localStorage.setItem('user', JSON.stringify({name : this.model.username, online: true, friends: ['AquaBadTrip','Blinkix', 'Pingourou']}));
      this.router.navigate(['/home']);  
    });
    // Vérifier  login/mdp requete api
    
  }
  
  toSignIn(){
    this.router.navigate(['/edit']);
  }

  loginAnonyme(){
    //check en base pour changer id d'anonyme +1 a chaque co
    this.userServ.getNewAnonyme().subscribe((user)=> {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);
    }, ()=>{
      localStorage.setItem('user', JSON.stringify({name : 'ano001', online:true}));
      this.router.navigate(['/home']);  
    })
   
  }
}