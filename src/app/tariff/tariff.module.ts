import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffPage } from './pages/tariff.page/tariff.page';


@NgModule({
  declarations: [

    TariffListComponent,
    TariffPage
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class TariffModule { }
