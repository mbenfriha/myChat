import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatListModule } from '@angular/material';
import { SearchPersonComponent } from './search-person.component';

@NgModule({
	imports:[
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatChipsModule,
		MatListModule
	],
	exports:[SearchPersonComponent],
	declarations:[SearchPersonComponent],
})
export class SearchPersonModule {}