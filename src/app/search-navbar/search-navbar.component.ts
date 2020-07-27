import { Component, OnInit, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.css']
})
export class SearchNavbarComponent implements OnInit {
  search: string;
  constructor(private searchService: SearchService,
              private router: Router) { }

  public passData(): void {
    this.searchService.searchData = this.search;
  }

  ngOnInit() {
  }

  onClick(): void {
    this.passData();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/search']);
    console.log(this.search);
    console.log(this.searchService.searchData);
  }

}
