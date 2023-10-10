import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { TariffService } from './tariff.service';

describe('Service: Tariff', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TariffService, HttpClientModule],
      imports:[HttpClientModule]
    });
  });

  it('should ...', inject([TariffService], (service: TariffService) => {
    expect(service).toBeTruthy();
  }));
});
