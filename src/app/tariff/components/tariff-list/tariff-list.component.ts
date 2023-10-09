import { Component, Input, OnInit } from '@angular/core';

import { Tariff } from '../../models/tariff.interface';
import { TariffService } from './../../services/tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent implements OnInit {
  @Input() tariffs: Tariff[] = [];

  constructor() {}

  ngOnInit() {
  }
}
