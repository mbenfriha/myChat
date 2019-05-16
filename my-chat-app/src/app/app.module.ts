import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadAvatarComponent } from './upload-avatar/upload-avatar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';


import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { LyIconModule } from '@alyle/ui/icon';





@NgModule({
  declarations: [
    AppComponent,
    UploadAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    BrowserAnimationsModule,
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    CommonModule,
    FormsModule,
    LyIconModule,
  ],

  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent],
  exports: [UploadAvatarComponent],
})
export class AppModule { }
