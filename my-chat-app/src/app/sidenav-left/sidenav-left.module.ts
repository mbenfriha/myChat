import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCardModule, MatButtonModule } from '@angular/material';
import { SideNavLeftComponent } from './sidenav-left.component';
import { LyButtonModule } from '@alyle/ui/button';
import { CommonModule } from '@angular/common';
import { ProfilFormModule } from '../profil-form/profil.form.module';

@NgModule({
	imports:[
		CommonModule,
		MatSidenavModule,
		LyButtonModule,
		MatCardModule,
		MatButtonModule,
		ProfilFormModule
	],
	exports:[SideNavLeftComponent],
	declarations:[SideNavLeftComponent],
})
export class SideNavLeftModule{}