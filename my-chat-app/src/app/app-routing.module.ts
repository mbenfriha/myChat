import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home-component/home.component';
import { ProfilFormComponent } from './profil-form/profil.form.component';
import { HomeResolver } from './common/resolver/home.resolver';
import { SearchPersonComponent } from './search-person/search-person.component';
import { SearchPersonResolver } from './common/resolver/search-person.resolver';

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
  },{
    path: 'search',
    component: SearchPersonComponent,
    resolve: {allUser: SearchPersonResolver}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    HomeResolver,
    SearchPersonResolver
  ]
})
export class AppRoutingModule { }
