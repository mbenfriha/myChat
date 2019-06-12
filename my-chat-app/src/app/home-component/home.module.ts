import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule, MatCardModule, MatLineModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfilFormModule } from '../profil-form/profil.form.module';

@NgModule({
	imports:[
		CommonModule,
		MatButtonModule,
		MatListModule,
		MatCardModule,
		MatLineModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		ProfilFormModule,
	],
	exports:[
		HomeComponent,
	],
	declarations: [HomeComponent]
})
export class HomeModule {}