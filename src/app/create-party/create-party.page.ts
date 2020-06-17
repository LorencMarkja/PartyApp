import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { YtService } from '../services/yt/yt.service';

import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {PartyService} from '../services/party.service';
import { NavController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.page.html',
  styleUrls: ['./create-party.page.scss'],
})
export class CreatePartyPage  {
  Uid: any ;
  playlists: Observable<any[]>;
  kw1: any;
  kw2: any;
  idP: any;


  constructor(
      private router: Router,
      private partyService: PartyService,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private ytService: YtService, 
      public navCtrl: NavController
  ) {}

  // tslint:disable-next-line:variable-name
  form_create = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    genre: new FormControl('', [
      Validators.required,

    ]),
    mood: new FormControl('', [
      Validators.required,

    ]),
    user: new FormControl('', [
      Validators.required,
    ]),

  });


  async onCreate(){
    let kw1 = this.form_create['genre'];
    let kw2 = this.form_create['mood'];
    this.playlists = this.ytService.searchPlaylist(this.kw1, this.kw2);
    this.playlists.subscribe (data => {
      console.log('playlists:', data);
    })

    const loading = await this.loadingCtrl.create({ message: 'Creazione party in corso...' });
    await loading.present();
    this.partyService.create(this.form_create.value).subscribe(
        // If success
        async res => {
          this.idP=res;
          const toast = await this.toastCtrl.create({ message: 'Party Creato', duration: 2000, color: 'dark' });
          await toast.present();
          loading.dismiss();
          this.form_create.reset();
          this.navCtrl.navigateRoot(['/party/' + this.idP]);

          // *******    aggiungere reindirizzamento a pagina party   ************
        // },
        // // If there is an error
        // async () => {
        //   const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
        //   loading.dismiss();
        //   await alert.present();
        }
    );

  }

  ionViewDidEnter(){
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    console.log(decoded);
    this.Uid = decoded['user_id'];
  }

}
