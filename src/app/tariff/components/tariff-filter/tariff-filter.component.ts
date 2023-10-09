import { Tariff } from './../../models/tariff.interface';
import { Component , EventEmitter, Output } from '@angular/core';

import { SortCriteria, SortDirection, SortOptions } from '../../models/tariff-sort';
import { TariffFilterService } from '../../services/tariff-filter.service';

@Component({
  selector: 'app-tariff-filter',
  templateUrl: './tariff-filter.component.html',
  styleUrls: ['./tariff-filter.component.scss'],
})
export class TariffFilterComponent {
  @Output() clearFilter = new EventEmitter<any>();

  selectedSortFieldName: string | null = null;
  SortDirection = SortDirection;
  selectedSortDirection: SortDirection = SortDirection.DESC;
  sortOptions = SortOptions;

  sortCriteria: SortCriteria = {
    sortFieldName: null,
    sortDirection: SortDirection.DESC,
  };

  constructor(private tariffFilterService: TariffFilterService) {}

  applyFilter(sortFieldName: string | null) {
    this.selectedSortFieldName = sortFieldName;
    this.sortCriteria.sortFieldName = this.selectedSortFieldName ;
    this.tariffFilterService.setSelectedSortCriteria(this.sortCriteria);
  }

  toggleSortDirection() {
    this.selectedSortDirection =
      this.selectedSortDirection === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC;

    this.sortCriteria.sortDirection = this.selectedSortDirection;
    this.tariffFilterService.setSelectedSortCriteria(this.sortCriteria);
  }


  clearFilters() {
    this.selectedSortFieldName = null;
    this.selectedSortDirection = SortDirection.DESC;
    this.sortCriteria.sortFieldName = null;
    this.sortCriteria.sortDirection = SortDirection.DESC;
    
    this.clearFilter.emit();
    this.tariffFilterService.setSelectedSortCriteria(this.sortCriteria);
  }
}
