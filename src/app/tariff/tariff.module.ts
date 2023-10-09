import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffPage } from './pages/tariff.page/tariff.page';
import { TariffService } from './services/tariff.service';


@NgModule({
  declarations: [

    TariffListComponent,
    TariffPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TariffService],
})
export class TariffModule { }
