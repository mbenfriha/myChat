import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { SideNavLeftComponent } from './sidenav-left.component';

@NgModule({
	imports:[MatSidenavModule],
	exports:[SideNavLeftComponent],
	declarations:[SideNavLeftComponent],
})
export class SideNavLeftModule{}