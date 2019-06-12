import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-app.component.html',
})
export class LoginAppComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    // Vérifier  login/mdp requete api
    localStorage.setItem('user', JSON.stringify({name : this.model.username, online: true, friends: ['AquaBadTrip','Blinkix', 'Pingourou']}));
    this.router.navigate(['/home']);
  }
  
  toSignIn(){
    this.router.navigate(['/edit']);
  }

  loginAnonyme(){
    //check en base pour changer id d'anonyme +1 a chaque co
    localStorage.setItem('user', JSON.stringify({name : "Ano001", online: true}));
    this.router.navigate(['/home']);
  }
}