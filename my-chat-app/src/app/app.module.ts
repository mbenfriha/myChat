import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BadWordComponent } from './bad-word/bad-word.component';
import { SideNavLeftModule } from './sidenav-left/sidenav-left.module';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeModule } from './home-component/home.module';
import { HomeComponent } from './home-component/home.component';
import { ProfilFormComponent } from './profil-form/profil.form.component';
import { ProfilFormModule } from './profil-form/profil.form.module';
import { ConversationService } from './common/conversation.service';
import { SearchPersonComponent } from './search-person/search-person.component';
import { SearchPersonModule } from './search-person/search-person.module';





@NgModule({
  declarations: [
    AppComponent,
    BadWordComponent,
    LoginAppComponent,
  ],
  imports: [
    SideNavLeftModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    ProfilFormModule,
    SearchPersonModule
  ],

  bootstrap: [AppComponent],
  exports: [BadWordComponent],
})
export class AppModule { }
