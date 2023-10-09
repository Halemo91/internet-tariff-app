import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TariffFilterComponent } from './tariff-filter.component';

describe('TariffFilterComponent', () => {
  let component: TariffFilterComponent;
  let fixture: ComponentFixture<TariffFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffFilterComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(TariffFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
