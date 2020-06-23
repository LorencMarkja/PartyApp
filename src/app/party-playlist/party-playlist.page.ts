import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { YtService } from '../services/yt/yt.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {PartyService} from '../services/party.service';
import {AlertController, Platform} from '@ionic/angular';
import {Playlist} from '../services/playlist.model';
import { async } from '@angular/core/testing';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-party-playlist',
  templateUrl: './party-playlist.page.html',
  styleUrls: ['./party-playlist.page.scss'],
})
export class PartyPlaylistPage implements OnInit {
  
  videos: Observable<any[]>;
  playlist: Observable<Playlist[]>;
  youtube_p: any;
  Uid: any;


  constructor( 
    private PartyServ: PartyService,
    private route: ActivatedRoute, 
    private ytService: YtService, 
    private youtube: YoutubeVideoPlayer,
    private plt: Platform,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    let idParty= this.route.snapshot.paramMap.get('id');
    this.PartyServ.getPlaylist(idParty).subscribe( response => {
      this.playlist = response[0].youtube_p;
      this.videos= this.ytService.getListVideos(this.playlist);
      this.videos.subscribe( 
        async data => {
          console.log('videos:', data);
      });
    });
  }

  openVideo(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
     window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }
  delete(){
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.Uid = decoded['user_id'];
    console.log('ciao'+ this.Uid);

    this.PartyServ.delete(this.Uid).subscribe(
        // If success
        async res => {

        },
        async () => {
          const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });

          await alert.present();
        });
}
}
