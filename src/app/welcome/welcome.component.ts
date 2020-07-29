import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PopularMoviesService } from './popularmovies.service';
import { MovieDetailService } from '../movie-detail.service';
import { ISearch } from '../ISearch';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  popular$: ISearch;
  imgUrl = 'https://image.tmdb.org/t/p/w500';

  popularMovies = 'https://api.themoviedb.org/3/movie/'
  + 'popular?api_key=83bb9e555fe9d2d8a45c9ca43f0711f9&language=en-US&page=1';

  constructor(private popularMoviesService: PopularMoviesService,
              private movieDetailService: MovieDetailService,
              private router: Router) { }

  getPopular(): void {
    this.popularMoviesService.getPopularMovies(this.popularMovies)
    .pipe(
      map(movies => this.popular$ = movies)
    ).subscribe();
  }

  onSelect(selectedMovieId: number): void {
    this.movieDetailService.movieId = selectedMovieId;
    this.router.navigate(['/movie/', selectedMovieId]);
  }

  ngOnInit() {
    this.getPopular();
  }

}
