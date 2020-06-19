import { Component, OnInit } from '@angular/core';
import { YtService } from '../services/yt/yt.service';
import {NavController, AlertController, ToastController, LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {PartyService} from '../services/party.service';
import {Party} from '../services/party.model';
import * as jwt_decode from 'jwt-decode';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-party',
  templateUrl: './party.page.html',
  styleUrls: ['./party.page.scss'],
})
export class PartyPage implements OnInit {

  Uid: any;
  name: any;
  keyword: any;
  playlists: Observable<any[]>;
  party: Party[];
  numberP:any;
  numPar:string;


  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private PartyServ: PartyService,
      private ytService: YtService,
      private alertCtrl: AlertController,

      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
  ) { }


  // tslint:disable-next-line:variable-name
  participants = new FormGroup({
    user: new FormControl('', [
      Validators.required,

    ]),
    party: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    //console.log(decoded);

    this.name = decoded['firstname'];
    this.Uid = decoded['user_id'];
    this.participants['user']= this.Uid;
    this.participants['party']= id;
    this.PartyServ.getParty(id).subscribe(response => {
      this.party = response;

    });

    this.PartyServ.getP(id).subscribe(response => {
      // this.partys = response;
      this.numberP = response;
      this.numPar=this.numberP['number'];
      console.log(this.numberP['number']);
    });
    // let keyword = 'rock';

    // this.playlists = this.ytService.searchPlaylist(this.keyword);
    // this.playlists.subscribe (data => {
    //   console.log('playlists:', data);
    // }, async err => {
    //       let alert = await this.alertCtrl.create({
    //       message: 'No Playlist found for that keyword',
    //       buttons: ['OK']
    //    });
    //    alert.present();
    //  })
  }
  async insert_participants(){
    let id = this.route.snapshot.paramMap.get('id');
    this.participants.value['user']= this.Uid;
    this.participants.value['party']= id;

    console.log(this.participants.value);

    const loading = await this.loadingCtrl.create({ message: 'Accesso al party in corso...' });
    await loading.present();
    this.PartyServ.insertP(this.participants.value).subscribe(
        // If success
        async res => {

          loading.dismiss();
          this.participants.reset();
          //aggiungere reindirizzamento pagina playlist-party
        },
        async () => {
          const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
          loading.dismiss();
          await alert.present();
        });


  }
}
