import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'search/:title', component: MovieSearchComponent },
  { path: 'movie/:movieid', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
