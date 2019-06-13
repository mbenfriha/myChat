import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatListModule, MatCardModule, MatLineModule, MatInputModule} from '@angular/material';
import {HomeComponent} from './home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ProfilFormModule} from '../profil-form/profil.form.module';
import {HomeResolver} from '../common/resolver/home.resolver';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatLineModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    ProfilFormModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [
    HomeComponent,
  ],
  declarations: [HomeComponent],
  providers: [HomeResolver]
})
export class HomeModule {
}
