import { TestBed, inject } from '@angular/core/testing';

import { NomesTecService } from './nomes-tec.service';

describe('NomesTecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomesTecService]
    });
  });

  it('should be created', inject([NomesTecService], (service: NomesTecService) => {
    expect(service).toBeTruthy();
  }));
});
