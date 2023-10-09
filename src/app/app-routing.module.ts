import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TariffPage } from './tariff/pages/tariff.page/tariff.page';


const routes: Routes = [
  {
    path: 'TariffPage',
    component: TariffPage,
  },
  { path: '**', redirectTo: 'TariffPage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
