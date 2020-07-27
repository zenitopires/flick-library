import { Injectable } from '@angular/core';

// This service is used to pass 'searchData' between unrelated components

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData: string;

  constructor() { }
}
