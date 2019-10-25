import { TestBed } from '@angular/core/testing';

import { WhoamiService } from './whoami.service';

describe('WhoamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhoamiService = TestBed.get(WhoamiService);
    expect(service).toBeTruthy();
  });
});
