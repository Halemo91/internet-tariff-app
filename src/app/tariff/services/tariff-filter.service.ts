import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortCriteria, SortDirection } from '../models/tariff-sort';

@Injectable({
  providedIn: 'root',
})
export class TariffFilterService {
  private selectedSortCriteriaSubject = new BehaviorSubject<SortCriteria>({
    sortFieldName: null,
    sortDirection: SortDirection.DESC,
  });
  selectedSortCriteria$ = this.selectedSortCriteriaSubject.asObservable();

  setSelectedSortCriteria(sortCriteria: SortCriteria) {
    this.selectedSortCriteriaSubject.next(sortCriteria);
  }
}
