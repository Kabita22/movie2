import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'movies-list', component: MoviesListComponent },
   { path: 'movie-details/:name', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
   { path: 'welcome', component: WelcomeComponent },
  //{ path: 'products', loadChildren: 'src/app/products/products.module#ProductsModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
