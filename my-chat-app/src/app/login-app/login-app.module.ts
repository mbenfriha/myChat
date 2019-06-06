import { NgModule } from '@angular/core';
import { LyButtonModule } from '@alyle/ui/button';
import { CommonModule } from '@angular/common';
import { LoginAppComponent } from './login-app.component';

@NgModule({
	imports:[
		LyButtonModule,
		CommonModule,
	],
	exports:[LoginAppComponent],
	declarations:[LoginAppComponent]
})
export class LoginAppModule{}