import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { MovieService } from '../movie.service';
import { SearchService } from '../search.service';
import { MovieDetailService } from '../movie-detail/movie-detail.service';
import { map } from 'rxjs/operators';
import { ISearch } from './ISearch';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  search$: ISearch;
  searchQuery = this.route.snapshot.paramMap.get('title') ||
                this.searchService.searchData;
  pageQuery = '&page=';
  pageNumber: number;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  movieUrl = 'https://api.themoviedb.org/3/search/' +
              'movie?api_key=83bb9e555fe9d2d8a45c9ca43f0711f9&query=' +
              this.searchQuery + this.pageQuery;

  constructor(private movieService: MovieService,
              private searchService: SearchService,
              private movieDetailService: MovieDetailService,
              private route: ActivatedRoute,
              private router: Router) { }

  // Search for movies
  displaySearch(): void {
    this.movieService.getMovieSearch(this.movieUrl)
                                .pipe(
                                  map(movies => this.search$ = movies)
                                )
                                .subscribe();
  }

  // Same as displaySearch(), uses buttons for pagination
  pageSearch(url: string): void {
    this.movieService.getMovieSearch(url)
                                .pipe(
                                  map(item => this.search$ = item)
                                )
                                .subscribe();
  }

  // Gets movie search term from search box
  getSearchQuery(): string {
    return this.searchService.searchData;
  }

  // Go to next page in movie results
  nextPage(currentPage: number, numOfPages: number): void {
    if (currentPage < numOfPages) {
      currentPage++;
      const searchUrl = 'https://api.themoviedb.org/3/search/' +
                      'movie?api_key=83bb9e555fe9d2d8a45c9ca43f0711f9&query=' +
                      this.searchQuery + this.pageQuery + currentPage;
      this.pageSearch(searchUrl);
    }
  }

  // Go to previous page in movie results
  prevPage(currentPage: number): void {
    if (currentPage > 1) {
      currentPage--;
      const searchUrl = 'https://api.themoviedb.org/3/search/' +
      'movie?api_key=83bb9e555fe9d2d8a45c9ca43f0711f9&query=' +
      this.searchQuery + this.pageQuery + currentPage;
      this.pageSearch(searchUrl);
    }
  }

  // When selecting movie, pass its ID to the movie detail view
  onSelect(selectedMovieId: number): void {
    this.movieDetailService.movieId = selectedMovieId;
    this.router.navigate(['/movie/', selectedMovieId]);
  }

  ngOnInit() {
    this.displaySearch();
  }

}
