import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartyPlaylistPageRoutingModule } from './party-playlist-routing.module';

import { PartyPlaylistPage } from './party-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartyPlaylistPageRoutingModule
  ],
  declarations: [PartyPlaylistPage]
})
export class PartyPlaylistPageModule {}
