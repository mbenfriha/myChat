import { OnInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../common/model/user.model';

@Component({
	selector: 'app-profil-form',
	templateUrl: 'profil.form.component.html'
})
export class ProfilFormComponent implements OnInit{
	pseudo = new FormControl('');
	mail = new FormControl('');
	password = new FormControl('');

	constructor(
		public userService: UserService,
	){}

	ngOnInit(){}
	onSubmit(){
		let newUser : User;
		newUser.name = this.pseudo.value;
		newUser.password = this.password.value;
		this.userService.signIn(newUser);
		console.log(this.pseudo.value);
		console.log(this.mail.value);
		console.log(this.password.value);
	}
}