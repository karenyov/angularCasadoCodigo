import { TestBed, inject } from '@angular/core/testing';

import { MeuLogService } from './meu-log.service';

describe('MeuLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuLogService]
    });
  });

  it('should be created', inject([MeuLogService], (service: MeuLogService) => {
    expect(service).toBeTruthy();
  }));
});
