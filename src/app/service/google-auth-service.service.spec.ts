import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './google-auth-service.service';

describe('GoogleAuthServiceService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
