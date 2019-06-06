import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginAppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
