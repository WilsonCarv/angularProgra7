import { TestBed } from '@angular/core/testing';

import { AlergiafrecService } from './alergiafrec.service';

describe('AlergiafrecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlergiafrecService = TestBed.get(AlergiafrecService);
    expect(service).toBeTruthy();
  });
});
