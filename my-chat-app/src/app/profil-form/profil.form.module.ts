import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ProfilFormComponent } from './profil.form.component';

@NgModule({
	imports:[
		CommonModule,
		MatInputModule,
		MatButtonModule,
	],
	exports:[ProfilFormComponent],
	declarations:[ProfilFormComponent]
})
export class ProfilFormModule{}