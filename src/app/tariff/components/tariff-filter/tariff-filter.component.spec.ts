import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TariffFilterComponent } from './tariff-filter.component';
import { TariffFilterService } from '../../services/tariff-filter.service';

describe('TariffFilterComponent', () => {
  let component: TariffFilterComponent;
  let fixture: ComponentFixture<TariffFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffFilterComponent],
      imports:[FormsModule],
      providers: [
        {
          provide: TariffFilterService
        },
      ],
    });
    fixture = TestBed.createComponent(TariffFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sort direction when toggleSortDirection() is called', () => {
    const initialSortDirection = component.selectedSortDirection;
    component.toggleSortDirection();
    expect(component.selectedSortDirection).not.toEqual(initialSortDirection);
  });

  it('should update sort criteria when onSortFieldNameChange() is called', () => {
    const sortFieldName = 'downloadSpeed';
    component.onSortFieldNameChange(sortFieldName);
    expect(component.selectedSortFieldName).toEqual(sortFieldName);
  });

  it('should emit clearFilter event when clearFilters() is called', () => {
    spyOn(component.clearFilter, 'emit');
    component.clearFilters();
    expect(component.clearFilter.emit).toHaveBeenCalled();
  });

});
