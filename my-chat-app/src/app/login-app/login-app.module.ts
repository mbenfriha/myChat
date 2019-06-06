import { NgModule } from '@angular/core';
import { LyButtonModule } from '@alyle/ui/button';
import { CommonModule } from '@angular/common';
import { LoginAppComponent } from './login-app.component';
import { MatInputModule, MatButton } from '@angular/material';

@NgModule({
	imports:[
		LyButtonModule,
		CommonModule,
		MatInputModule,
		MatButton
	],
	exports:[LoginAppComponent],
	declarations:[LoginAppComponent]
})
export class LoginAppModule{}
