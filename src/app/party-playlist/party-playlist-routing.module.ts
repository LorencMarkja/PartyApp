import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartyPlaylistPage } from './party-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: PartyPlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyPlaylistPageRoutingModule {}
