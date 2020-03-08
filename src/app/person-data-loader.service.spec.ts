import { TestBed } from '@angular/core/testing';

import { PersonDataLoaderService } from './person-data-loader.service';

describe('PersonDataLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonDataLoaderService = TestBed.get(PersonDataLoaderService);
    expect(service).toBeTruthy();
  });
});
