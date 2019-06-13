import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ProfilFormComponent } from './profil.form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UploadAvatarModule } from '../upload-avatar/upload-avatar.module'

@NgModule({
	imports:[
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
    UploadAvatarModule
	],
	exports: [ProfilFormComponent],
	declarations: [ProfilFormComponent]
})
export class ProfilFormModule {}
