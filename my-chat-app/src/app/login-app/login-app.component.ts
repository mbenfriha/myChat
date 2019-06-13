import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../common/model/user.model';

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
    console.log(this.model.username);
    this.userServ.login(this.model.username).subscribe((user:User) =>{
      if(user[0].password === this.model.password){
      localStorage.setItem('user', this.model.username);
      this.router.navigate(['/home']);
      }else {
        alert('Connexion impossible: mot de passe ou pseudo incorrect')
        throw Error
      }
    },(err)=>{
      alert('Connexion impossible: mot de passe ou pseudo incorrect')
    });
    
  }
  
  toSignIn(){
    this.router.navigate(['/edit']);
  }

  loginAnonyme(){
    this.userServ.getNewAnonyme().subscribe((user)=> {
      localStorage.setItem('user', user.name);
      this.router.navigate(['/home']);
    }, ()=>{
      localStorage.setItem('user', JSON.stringify({name : 'Anonyme', online:true}));
      this.router.navigate(['/home']);  
    })
   
  }
}