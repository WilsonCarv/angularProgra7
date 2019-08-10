import { TestBed } from '@angular/core/testing';

import { AlergiaService } from './alergia.service';

describe('AlergiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlergiaService = TestBed.get(AlergiaService);
    expect(service).toBeTruthy();
  });
});
