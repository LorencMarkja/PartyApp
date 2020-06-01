import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAreaPage } from './user-area.page';

const routes: Routes = [
  {
    path: '',
    component: UserAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAreaPageRoutingModule {}
