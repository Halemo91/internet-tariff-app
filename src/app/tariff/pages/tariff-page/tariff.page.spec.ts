import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPage} from './tariff.page';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('TariffPage', () => {
  let component: TariffPage;
  let fixture: ComponentFixture<TariffPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffPage ],
      imports:[HttpClientModule, MatProgressSpinnerModule],
      providers:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
