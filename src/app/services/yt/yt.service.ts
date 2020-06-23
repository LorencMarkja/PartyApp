import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiKey='AIzaSyClzhPDoHWDmnT8D3mOWyV4za2gP_WIpMM'; //apikey google console

  constructor( public http: HttpClient) { }

  searchPlaylist(kw1, kw2){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ kw1+'+'+ kw2 +'&type=playlist&key='+ this.apiKey +'&maxResults=1').pipe(
      map((res: any) => {
        return res['items'];
      })
    );
  }
  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet&maxResults=100').pipe(
      map((res: any) => {
        return res['items'];
      })
    );
  }
}
