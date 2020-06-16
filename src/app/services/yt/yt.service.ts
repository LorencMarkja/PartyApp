import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiKey='AIzaSyAF5V95lUqUPeRIbOwpf09a_Gg5VihOCj0'; //apikey google console

  constructor( public http: HttpClient) { }

  searchPlaylist(keyword){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ keyword +'&type=playlist&key='+ this.apiKey).pipe(
      map((res: any) => {
        return res['items'];
      })
    );
  }
  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet').pipe(
      map((res: any) => {
        return res['items'];
      })
    );
  }
}