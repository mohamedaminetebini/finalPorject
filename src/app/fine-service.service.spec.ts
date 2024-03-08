import { TestBed } from '@angular/core/testing';

import { FineServiceService } from './fine-service.service';

describe('FineServiceService', () => {
  let service: FineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
