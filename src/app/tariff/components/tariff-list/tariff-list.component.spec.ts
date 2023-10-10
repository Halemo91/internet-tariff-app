import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffListComponent } from './tariff-list.component';
import { TariffFilterService } from '../../services/tariff-filter.service';
import { BehaviorSubject } from 'rxjs';
import { SortCriteria, SortDirection } from '../../models/tariff-sort';
import { Tariff } from '../../models/tariff.interface';
import { MatIconModule } from '@angular/material/icon';

class MockTariffFilterService {
  selectedSortCriteria$ = new BehaviorSubject<SortCriteria | null>(null);
}

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let mockTariffFilterService: MockTariffFilterService;

  beforeEach(() => {
    mockTariffFilterService = new MockTariffFilterService();

    TestBed.configureTestingModule({
      imports:[MatIconModule],
      declarations: [TariffListComponent],
      providers: [
        { provide: TariffFilterService, useValue: mockTariffFilterService },
      ],
    });
    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to selectedSortCriteria$ and sort tariffs when criteria changes', () => {
    const mockTariffs: Tariff[] = [
      { id: 1, name: 'Tariff A', downloadSpeed: 50, uploadSpeed: 10, benefits: [], price: 30 },
      { id: 2, name: 'Tariff B', downloadSpeed: 100, uploadSpeed: 20, benefits: [], price: 50 },
    ];
    component.filteredTariffs = mockTariffs;
    const sortCriteria: SortCriteria = {
      sortFieldName: 'downloadSpeed',
      sortDirection: SortDirection.ASC,
    };

    mockTariffFilterService.selectedSortCriteria$.next(sortCriteria);

    fixture.detectChanges(); 
    expect(component.filteredTariffs).toEqual(mockTariffs);
  });

});
