import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMovie } from '../IMovie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  movieId: number;

  public getMovieDetails(movie: number): Observable<IMovie> {
    return this.http.get<IMovie>('https://api.themoviedb.org/3/movie/' +
      movie + '?api_key=83bb9e555fe9d2d8a45c9ca43f0711f9&language=en-US');
  }

  constructor(private http: HttpClient) { }
}
