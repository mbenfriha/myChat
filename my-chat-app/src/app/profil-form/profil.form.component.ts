import { OnInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../common/model/user.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profil-form',
	templateUrl: 'profil.form.component.html'
})
export class ProfilFormComponent implements OnInit{
	pseudo = new FormControl('');
	mail = new FormControl('');
	password = new FormControl('');
	img = '';

	constructor(
		public router: Router,
		public userService: UserService,
	){}

	ngOnInit(){}

  setImg(img: string) {
	  this.img = img;
	}

  onSubmit(){

		let newUser= new User();
		newUser.name = this.pseudo.value;
		newUser.password = this.password.value;
		this.userService.signIn(newUser).subscribe((user)=> {
			localStorage.setItem('user', JSON.stringify(user));
			this.router.navigate(['/home']);
		});
		console.log(this.pseudo.value);
		console.log(this.mail.value);
		console.log(this.password.value);
		console.log(this.img);
	}

}
