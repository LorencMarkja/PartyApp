import { TestBed } from '@angular/core/testing';

import { YtService } from './yt.service';

describe('YtService', () => {
  let service: YtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
