import { Component, OnInit } from '@angular/core';
import { YtService } from '../services/yt/yt.service';
import { NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {PartyService} from '../services/party.service';
import {Party} from '../services/party.model';
import * as jwt_decode from 'jwt-decode';


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
  
  constructor(
    private route: ActivatedRoute,
    public router: Router, 
    private PartyServ: PartyService,
    private ytService: YtService, 
    private alertCtrl: AlertController) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    //console.log(decoded);

    this.name = decoded['firstname'];
    this.Uid = decoded['user_id'];

    this.PartyServ.getParty(id).subscribe(response => {
      // this.partys = response;
      this.party = response;
      console.log(this.party);
    });
    
    // this.playlists = this.ytService.searchPlaylist(this.keyword);
    // this.playlists.subscribe (data => {
    //   console.log('playlists:', data);
    // }, async err => {
    //   let alert = await this.alertCtrl.create({
    //     message: 'No Playlist found for that keyword',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // })
  }

}
