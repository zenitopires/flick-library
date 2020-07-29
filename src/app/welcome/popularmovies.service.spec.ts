import { TestBed } from '@angular/core/testing';

import { PopularmoviesService } from './popularmovies.service';

describe('PopularmoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularmoviesService = TestBed.get(PopularmoviesService);
    expect(service).toBeTruthy();
  });
});
