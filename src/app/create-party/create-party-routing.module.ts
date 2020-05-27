import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePartyPage } from './create-party.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePartyPageRoutingModule {}
