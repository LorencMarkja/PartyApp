import { Party } from './party.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CondictionModel} from './condiction.model';
import { Playlist } from './playlist.model';
import {Participants} from './participants.model';


@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private url = 'http://localhost:8888/auth_app/api';
  constructor(private http: HttpClient) { }

  create(party: Party): Observable<any> {
    return this.http.post<{ res: any }>(`${this.url}/createP.php`, party).pipe(
     map(response => response.res)
   );
  }

  createP(playlist: string){
    return this.http.get(`${this.url}/playlist.php?playlistId=`+ playlist);
  }


  getAll(){
     return this.http.get<[Party]>(this.url + '/getAll-party.php');
    //return this.http.get<Party>(`${this.url}/getAll-party.php`);
  }
 
  get(id:string){
    // return this.http.get<[Party]>(this.url + '/getAll-party');
    return this.http.get<[Party]>(this.url + '/getAll-party.php' + '?id=' + id);
  }

  //party
  getParty(id:string){
    // return this.http.get<[Party]>(this.url + '/getAll-party');
    return this.http.get<[Party]>(this.url + '/Party.php' + '?id=' + id);
  }

  search(searchCond: CondictionModel){
    return this.http.post<[Party]>(`${this.url}/search.php`, searchCond);
  }
  insertP(data: Participants): Observable<any> {
    return this.http.post<{ res: any }>(`${this.url}/participants.php`, data).pipe(
        map(response => response.res)
    );
  }

  getP(id:string){
    // return this.http.get<[Party]>(this.url + '/getAll-party');
    return this.http.get<string>(this.url + '/participants.php' + '?party=' + id) ;
  }

  getPlaylist(id:string){
    return this.http.get<[Playlist]>(this.url + '/getPlaylist.php' + '?id=' + id);
  }

  delete(id: string){
    return this.http.delete(`${this.url}/participants.php` + '?user=' + id);
  }
}
