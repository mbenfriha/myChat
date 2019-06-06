import { NgModule } from '@angular/core';
import { MatSidenavModule, MatCardModule } from '@angular/material';
import { SideNavLeftComponent } from './sidenav-left.component';
import { LyButtonModule } from '@alyle/ui/button';

@NgModule({
	imports:[
		MatSidenavModule,
		LyButtonModule,
		MatCardModule,
	],
	exports:[SideNavLeftComponent],
	declarations:[SideNavLeftComponent],
})
export class SideNavLeftModule{}