import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { UploadAvatarComponent } from './upload-avatar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyResizingCroppingImageModule} from '@alyle/ui/resizing-cropping-images';
import {LyIconModule} from '@alyle/ui/icon';

import { MinimaLight } from '@alyle/ui/themes/minima';


@NgModule({
	imports:[
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,

    LyButtonModule,
    LyThemeModule.setTheme('minima-light'),
    LyToolbarModule,
    LyResizingCroppingImageModule,
    LyIconModule,
	],

  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
  ],
	exports:[ UploadAvatarComponent],
	declarations:[ UploadAvatarComponent]
})
export class UploadAvatarModule {}
