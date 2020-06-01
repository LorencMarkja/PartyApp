import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '',
    component: TabsPage,
    children : [
      {
        path: 'search',
        children: [
          {
            path: '' ,
            loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
            //   loadChildren: '../search/search.module#SearchPageModule'
          }
        ]
      },
      {
        path: 'user-area',
        children: [
          {
            path: '' ,
           // loadChildren: '../user-area/user-area.module#User-areaPageModule'
            loadChildren: () => import('../user-area/user-area.module').then( m => m.UserAreaPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '' ,
            loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full'

      }


    ]
  },
  {
    path: '',
    redirectTo: '/tabs/search',
    pathMatch: 'full'

  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
