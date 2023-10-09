/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TariffPage} from './tariff.page';

describe('TariffPage', () => {
  let component: TariffPage;
  let fixture: ComponentFixture<TariffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
