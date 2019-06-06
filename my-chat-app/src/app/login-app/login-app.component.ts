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
    console.log('Tentative de connexion');

    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    this.router.navigate(['/home']);
  }
}