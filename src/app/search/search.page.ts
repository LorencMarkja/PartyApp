import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PartyService} from '../services/party.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Party} from '../services/party.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  partys: Party [];
  constructor(
      private partyService: PartyService,
      private authService: AuthService,
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      public navCtrl: NavController,
      private router: Router) { }
  form = new FormGroup({
    searchCond: new FormControl('', [
      Validators.required,
    ] ),
  });
  async onSubmit() {
    const loading = await this.loadingCtrl.create({ message: 'Searching party ...' });
    await loading.present();
    console.log(this.form.value);
    this.partyService.search(this.form.value).subscribe(

        /*
         // If success
         async () => {
           const toast = await this.toastCtrl.create({ message: 'Party Creato', duration: 2000, color: 'dark' });
           await toast.present();
           loading.dismiss();
           this.form.reset();
           // *******    aggiungere reindirizzamento a pagina party   ************
         },
         // If there is an error
         async () => {
           const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
           loading.dismiss();
           await alert.present();
         }

         */

        response => {
          // this.partys = response;
          this.partys = response;
          console.log(this.partys) ;
          loading.dismiss();
        });
  }

  NavParty(id){
    this.router.navigateByUrl('/party/' + id);
  }
}
