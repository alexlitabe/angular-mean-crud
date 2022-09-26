import { TestBed } from '@angular/core/testing';

import { ApiAuthHeadersService } from './api-auth-headers.service';

describe('ApiAuthHeadersService', () => {
  let service: ApiAuthHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAuthHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
