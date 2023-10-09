import { Component, Input, OnInit } from '@angular/core';
import { SortCriteria } from '../../models/tariff-sort';

import { Tariff } from '../../models/tariff.interface';
import { TariffFilterService } from '../../services/tariff-filter.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent implements OnInit {
  @Input() filteredTariffs: Tariff[] = [];

  constructor(private tariffFilterService: TariffFilterService) {}

  ngOnInit() {
    this.tariffFilterService.selectedSortCriteria$.subscribe(
      (sortCriteria: SortCriteria) => {
        this.sortTariffs(sortCriteria);
      }
    );
  }

  private sortTariffs(sortCriteria: SortCriteria) {
    this.filteredTariffs.sort((a: any, b: any) => {
      if (
        sortCriteria.sortFieldName == null ||
        sortCriteria.sortFieldName === ''
      ) {
        return 0;
      }

      const valueA = a[sortCriteria.sortFieldName];
      const valueB = b[sortCriteria.sortFieldName];

      if (sortCriteria.sortDirection === 0) {
        // Ascending order
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
      } else {
        // Descending order
        if (valueA > valueB) return -1;
        if (valueA < valueB) return 1;
      }

      return 0;
    });
  }
}
