import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import {SearchPage} from '../search/search.page';

/*
*/
const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];
@NgModule({
  imports: [
      RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
