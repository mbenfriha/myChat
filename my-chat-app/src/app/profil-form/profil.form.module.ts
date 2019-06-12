import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ProfilFormComponent } from './profil.form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadAvatarComponent } from '../upload-avatar/upload-avatar.component';

@NgModule({
	imports:[
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
	],
	exports:[ProfilFormComponent],
	declarations:[ProfilFormComponent]
})
export class ProfilFormModule{}