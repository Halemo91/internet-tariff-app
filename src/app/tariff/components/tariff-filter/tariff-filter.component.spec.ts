import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffFilterComponent } from './tariff-filter.component';

describe('TariffFilterComponent', () => {
  let component: TariffFilterComponent;
  let fixture: ComponentFixture<TariffFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffFilterComponent]
    });
    fixture = TestBed.createComponent(TariffFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
