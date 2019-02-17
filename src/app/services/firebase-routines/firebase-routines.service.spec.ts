import { TestBed } from '@angular/core/testing';

import { FirebaseRoutinesService } from './firebase-routines.service';

describe('FirebaseRoutinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseRoutinesService = TestBed.get(FirebaseRoutinesService);
    expect(service).toBeTruthy();
  });
});
