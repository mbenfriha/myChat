import { NgModule } from '@angular/core';
import { LyButtonModule } from '@alyle/ui/button';
import { CommonModule } from '@angular/common';
import { LoginAppComponent } from './login-app.component';
import { MatInputModule,  MatButtonModule } from '@angular/material';
import { HomeModule } from '../home-component/home.module';
import { ProfilFormModule } from '../profil-form/profil.form.module';

@NgModule({
	imports:[
		LyButtonModule,
		CommonModule,
		MatInputModule,
		MatButtonModule,
		HomeModule,
		ProfilFormModule,
	],
	exports:[LoginAppComponent],
	declarations:[LoginAppComponent]
})
export class LoginAppModule{}
