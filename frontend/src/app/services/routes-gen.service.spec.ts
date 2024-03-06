import { TestBed } from '@angular/core/testing';

import { RoutesGenService } from './routes-gen.service';

describe('RoutesGenService', () => {
  let service: RoutesGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
