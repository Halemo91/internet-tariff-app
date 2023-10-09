import { TariffFilterService } from './services/tariff-filter.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffPage } from './pages/tariff.page/tariff.page';
import { TariffService } from './services/tariff.service';
import { TariffFilterComponent } from './components/tariff-filter/tariff-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCommonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [TariffListComponent, TariffFilterComponent, TariffPage],
  providers: [TariffService, TariffFilterService],
})
export class TariffModule {}
