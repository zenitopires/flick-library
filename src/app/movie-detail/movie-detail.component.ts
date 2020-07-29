import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { MovieDetailService } from '../movie-detail.service';
import { IMovie } from '../IMovie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: IMovie;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  movieIdUrl = this.route.snapshot.paramMap.get(':movieid');

  constructor(private movieDetailService: MovieDetailService,
              private route: ActivatedRoute,
              private router: Router) { }

  // Fetch movie details for selected movie
  getDetails(): void {
    const movieId = +this.movieDetailService.movieId ||
                    +this.route.snapshot.paramMap.get('movieid');

    this.movieDetailService.getMovieDetails(movieId)
        .pipe(
          map(movie => this.movie$ = movie),
        ).subscribe();
  }

  ngOnInit() {
    if (this.movie$ === undefined) {
      this.getDetails();
    } else {
      this.router.navigate(['/home']);
    }
  }

}
