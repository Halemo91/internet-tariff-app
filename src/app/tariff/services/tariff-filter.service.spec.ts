/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TariffFilterService } from './tariff-filter.service';

describe('Service: TariffFilter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TariffFilterService]
    });
  });

  it('should ...', inject([TariffFilterService], (service: TariffFilterService) => {
    expect(service).toBeTruthy();
  }));
});
