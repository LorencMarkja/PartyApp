import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAreaPageRoutingModule } from './user-area-routing.module';

import { UserAreaPage } from './user-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAreaPageRoutingModule
  ],
  declarations: [UserAreaPage]
})
export class UserAreaPageModule {}
