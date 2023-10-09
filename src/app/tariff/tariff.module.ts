import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffPage } from './pages/tariff.page/tariff.page';
import { TariffService } from './services/tariff.service';
import { TariffFilterComponent } from './components/tariff-filter/tariff-filter.component';


@NgModule({
  declarations: [
    TariffListComponent,
    TariffPage,
    TariffFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [TariffService],
})
export class TariffModule { }
