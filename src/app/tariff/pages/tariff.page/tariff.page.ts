import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, of } from 'rxjs';

import { TariffService } from '../../services/tariff.service';
import { Tariff } from './../../models/tariff.interface';

@Component({
  selector: 'app-tariff.page',
  templateUrl: './tariff.page.html',
  styleUrls: ['./tariff.page.scss'],
})
export class TariffPage implements OnInit {
  filteredTariffs: Tariff[] | null = [];
  originalTariffs!: Tariff[];
  errorMessage: string = '';
  loadingTariff!: boolean;

  constructor(private tariffService: TariffService) {}

  ngOnInit() {
    this.loadingTariff = true;
    this.getTariff();
  }

  restTariff() {
    this.filteredTariffs = this.originalTariffs;
  }

  private getTariff() {
    this.tariffService
      .getTariffs()
      .pipe(
        catchError((errorMessage) => {
          this.errorMessage = errorMessage;
          this.loadingTariff = false;
          return of(null);
        })
      )
      .subscribe((tariffs) => {
        this.loadingTariff = false;
        this.filteredTariffs = tariffs;

        if (tariffs) {
          this.originalTariffs = [...tariffs];
        }
      });
  }
}
