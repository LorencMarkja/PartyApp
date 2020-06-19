import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartyPageRoutingModule } from './party-routing.module';

import { PartyPage } from './party.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PartyPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [PartyPage]
})
export class PartyPageModule {}
