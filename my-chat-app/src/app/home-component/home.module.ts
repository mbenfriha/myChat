import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule, MatCardModule, MatLineModule, MatInputModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfilFormModule } from '../profil-form/profil.form.module';
import { HomeResolver } from '../common/resolver/home.resolver';

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
	declarations: [HomeComponent],
	providers:[HomeResolver]
})
export class HomeModule {}