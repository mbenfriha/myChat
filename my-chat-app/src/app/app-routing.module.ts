import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home-component/home.component';
import { ProfilFormComponent } from './profil-form/profil.form.component';
import { HomeResolver } from './common/resolver/home.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginAppComponent
  },{
    path: 'home',
    component: HomeComponent,
    resolve: {conversations:HomeResolver}
  },{
    path: 'edit',
    component: ProfilFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    HomeResolver
  ]
})
export class AppRoutingModule { }
